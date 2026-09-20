// Blog content lives here. A post is a list of typed blocks that
// components/BlogPostBody.js knows how to render. Inline `code`, **bold** and
// [links](url) are supported inside any text string.

const h2 = (text) => ({ type: "h2", text });
const h3 = (text) => ({ type: "h3", text });
const p = (text) => ({ type: "p", text });
const ul = (...items) => ({ type: "ul", items });
const ol = (...items) => ({ type: "ol", items });
const code = (lang, title, source) => ({
  type: "code",
  lang,
  title,
  code: source.replace(/^\n/, "").replace(/\s+$/, ""),
});
const callout = (title, text) => ({ type: "callout", title, text });
const table = (head, rows) => ({ type: "table", head, rows });

const eksMigration = [
  p(
    "When I joined the team, the platform was already live and moving real money: a policy-issuance and underwriting system supporting billions of dollars in insured business, running on a serverless architecture. My mandate was to move it to Kubernetes without breaking anything along the way. No maintenance window, no “we’ll stabilise it next sprint”."
  ),
  p(
    "I’m a software engineer first, so most of this post is about the software: how we rebuilt the backend as a domain-driven NestJS application, how we made money-moving operations correct under retries and concurrency, how the underwriting rules engine stayed deterministic and auditable, and what it took to hit the performance targets. The delivery automation and the EKS platform are in here too, but as the supporting cast, and I’ve written them up at the depth I actually worked with them."
  ),
  // {
  //   type: "stats",
  //   items: [
  //     { value: "1,000", label: "requests per second" },
  //     { value: "150ms", label: "p95 latency" },
  //     { value: "99.5%", label: "uptime" },
  //     { value: "90%", label: "unit test coverage" },
  //   ],
  // },

  h2("Why move off serverless at all"),
  p(
    "Serverless got the platform off the ground quickly, and I don’t regret that choice for the first phase of a product. But at this scale the cracks were visible, and they were structural rather than tuning problems:"
  ),
  ul(
    "**Cold starts** were adding unpredictable tail latency during traffic spikes. Underwriting decisions are time-sensitive, and a fat p99 is a business problem, not just a graph. Provisioned concurrency papers over it, but at that point you are paying for idle capacity and have lost the main economic argument for serverless.",
    "**Debugging distributed function chains** got harder as the domain logic grew. A single policy issuance fanned out across several functions, and correlating a failure across invocation boundaries meant stitching logs together by hand.",
    "**No shared in-process state.** Every invocation re-established its own connections and re-read its own reference data, which made both latency and database connection counts hard to reason about.",
    "**Cost predictability** degraded under spiky, high-volume load. Pay-per-invocation pricing is wonderful at low, bursty volume and much less wonderful at sustained throughput."
  ),
  p(
    "None of these was fatal alone. Together they made a strong case for a long-running service model where we control the process lifecycle, connection pools, caches and scaling behaviour: Kubernetes, specifically Amazon EKS."
  ),
  callout(
    "The honest trade-off",
    "Long-lived services mean you now own things you used to rent: graceful shutdown, pool sizing, memory behaviour, event-loop health, and a much larger blast radius for a bad deploy. A lot of what follows is the engineering that makes owning those things safe."
  ),

  h2("The target architecture"),
  p(
    "Before writing code I wanted the end state pinned down as a set of decisions, each with a reason. This is the table I kept in the repo’s ADR folder:"
  ),
  table(
    ["Concern", "Choice", "Why"],
    [
      [
        "Application",
        "TypeScript on Node.js / NestJS, modular and domain-driven",
        "Modules mirror the real domain (policies, underwriting, clients) instead of the accidental structure of the old functions",
      ],
      [
        "Consistency",
        "Idempotency keys, optimistic concurrency, transactional outbox",
        "Retries and concurrent edits must never double-issue or corrupt a policy",
      ],
      [
        "Rules",
        "Pure, versioned, explainable underwriting rules",
        "Deterministic decisions that can be replayed and audited",
      ],
      [
        "Front-end",
        "React SPA on a typed API contract",
        "One unified surface for building and managing policies",
      ],
      [
        "Platform",
        "EKS, Terraform, ArgoCD, Istio",
        "Control over scheduling, networking and identity (covered near the end)",
      ],
      [
        "Delivery",
        "GitHub Actions with automated quality and security gates",
        "The pipeline is the only road to production",
      ],
    ]
  ),

  h2("Rebuilding the backend, not porting it"),
  p(
    "We did not lift-and-shift. A straight port of the functions would have carried forward every accidental coupling, so the backend was rebuilt from scratch. The forcing function was to name the bounded contexts first and let the module graph follow, rather than the other way round."
  ),
  code(
    "text",
    "src/ (simplified)",
    `
src/
├── policies/            # bounded context: policy lifecycle
│   ├── application/     # use-cases (IssuePolicy, EndorsePolicy, CancelPolicy)
│   ├── domain/          # aggregates, value objects, domain events, no framework imports
│   ├── infrastructure/  # repositories, outbound adapters
│   └── policies.module.ts
├── underwriting/        # rules engine, referral workflow
├── clients/             # accounts, brokers, entitlements
├── platform/            # cross-cutting: auth, idempotency, tracing, config
└── main.ts
`
  ),
  p(
    "Each context has the same inner shape: **controllers** translate HTTP into commands, **use-cases** orchestrate a single business operation in one transaction, the **domain** holds the invariants, and **infrastructure** adapters implement ports the domain declares. Dependencies point inward only. NestJS’s dependency injection makes that cheap: use-cases depend on an interface token, and the module wires the concrete repository."
  ),
  p(
    "The trouble with layered architecture is that it erodes one “just this once” import at a time, so the dependency rule is enforced by the build rather than by code review. A dependency-cruiser rule fails CI if the domain layer imports a framework or an ORM, or if one context reaches into another’s internals. Contexts talk through published interfaces and domain events."
  ),
  code(
    "javascript",
    ".dependency-cruiser.js (excerpt)",
    `
module.exports = {
  forbidden: [
    {
      name: 'domain-stays-pure',
      severity: 'error',
      from: { path: '^src/[^/]+/domain' },
      to: { path: ['^src/[^/]+/(application|infrastructure)', 'node_modules/(@nestjs|typeorm)'] },
    },
    {
      name: 'no-reaching-into-other-contexts',
      severity: 'error',
      from: { path: '^src/([^/]+)/' },
      to: { path: '^src/[^/]+/(domain|infrastructure)/', pathNot: '^src/$1/' },
    },
  ],
};
`
  ),

  h2("Modelling the policy lifecycle as a state machine"),
  p(
    "The old code represented a policy as a bag of fields plus a status string, and every function re-checked which combinations were legal. In the rebuild the lifecycle is an explicit state machine, and the type system does most of the policing: each state carries only the data that is valid in that state, and a transition table says which moves are allowed. **Make illegal states unrepresentable**, and the class of bugs where a cancelled policy gets endorsed simply cannot compile."
  ),
  code(
    "typescript",
    "policies/domain/policy.ts",
    `
type PolicyState =
  | { status: 'draft' }
  | { status: 'quoted'; quoteId: string; expiresAt: Date }
  | { status: 'referred'; reason: ReferralReason }
  | { status: 'bound'; boundAt: Date }
  | { status: 'issued'; policyNumber: string }
  | { status: 'cancelled'; effectiveAt: Date; reason: string };

type Status = PolicyState['status'];

const transitions = {
  draft: ['quoted'],
  quoted: ['referred', 'bound', 'draft'],
  referred: ['quoted', 'cancelled'],
  bound: ['issued', 'cancelled'],
  issued: ['cancelled'],
  cancelled: [],
} as const satisfies Record<Status, readonly Status[]>;

export class Policy {
  private events: DomainEvent[] = [];

  constructor(readonly id: PolicyId, private state: PolicyState, private version: number) {}

  transition<S extends Status>(next: Extract<PolicyState, { status: S }>): void {
    const allowed: readonly Status[] = transitions[this.state.status];
    if (!allowed.includes(next.status)) {
      throw new IllegalTransitionError(this.state.status, next.status);
    }
    this.state = next;
    this.events.push(new PolicyStateChanged(this.id, next.status));
  }

  pullEvents(): DomainEvent[] {
    const out = this.events;
    this.events = [];
    return out;
  }
}
`
  ),
  p(
    "The aggregate records domain events as a side effect of valid transitions and hands them over with `pullEvents()`. That is what feeds the outbox in the next section. The aggregate itself never touches a database, a queue or a clock it wasn’t given, which is also what makes it trivially unit-testable."
  ),

  h2("An underwriting engine you can replay and audit"),
  p(
    "Underwriting rules decide whether a risk is accepted, referred to a human, loaded with a surcharge, or declined. In a regulated domain, “the system said no” is not an acceptable explanation. So the rules engine has three properties by design:"
  ),
  ul(
    "**Pure.** A rule is a function from an immutable input snapshot to an outcome. No I/O, no clock, no randomness. Reference data (rating tables, territory codes) is loaded up front as a versioned snapshot and passed in.",
    "**Versioned.** Every rule has an id and a version, and the version that fired is stored with the decision. Changing a rule creates a new version rather than mutating history.",
    "**Explainable.** The engine returns a decision **and its trace**: every rule evaluated, in order, with its outcome and reason. The trace is persisted, so a decision made months ago can be replayed against the same inputs and explained line by line."
  ),
  code(
    "typescript",
    "underwriting/domain/engine.ts",
    `
export type Outcome =
  | { kind: 'pass' }
  | { kind: 'refer'; reason: string }
  | { kind: 'decline'; reason: string }
  | { kind: 'load'; factor: Decimal; reason: string };

export interface Rule<I> {
  readonly id: string;
  readonly version: number;
  evaluate(input: Readonly<I>): Outcome;
}

export function underwrite<I>(rules: readonly Rule<I>[], input: Readonly<I>): Decision {
  const trace = rules.map((rule) => ({
    rule: rule.id + '@' + rule.version,
    outcome: rule.evaluate(input),
  }));

  // Severity order is fixed: decline beats refer beats load beats pass.
  const decline = trace.find((t) => t.outcome.kind === 'decline');
  if (decline) return { result: 'declined', trace };

  if (trace.some((t) => t.outcome.kind === 'refer')) return { result: 'referred', trace };

  const loading = trace
    .filter((t): t is Traced<'load'> => t.outcome.kind === 'load')
    .reduce((acc, t) => acc.mul(t.outcome.factor), new Decimal(1));

  return { result: 'accepted', loading, trace };
}
`
  ),
  p(
    "Purity has a second payoff: this is the part of the system where the migration’s risk concentrated, and a deterministic function is exactly what you can run against a large set of recorded historical inputs and diff against the old system’s outputs. More on that in the testing section."
  ),

  h2("Correctness under retries and concurrent edits"),
  p(
    "For a system that issues financial products, the failure modes that matter aren’t crashes; they’re duplicates and lost updates. Networks retry, clients double-click, message brokers deliver at-least-once, and two underwriters open the same policy. Three mechanisms, layered, handle this:"
  ),
  ol(
    "**Idempotency keys.** Every state-changing endpoint takes an `Idempotency-Key`. The key and a hash of the request body are stored with the response inside the same transaction as the change, behind a unique constraint. A retry with the same key returns the stored response; the same key with a different body is rejected as a client bug.",
    "**Optimistic concurrency.** Aggregates carry a version. Saves are `UPDATE … WHERE id = ? AND version = ?`, and zero affected rows means someone else won the race, surfaced as a `409` (or `412` when the client sent `If-Match`) rather than a silent overwrite.",
    "**Transactional outbox.** Publishing an event and committing the state change can’t be two independent steps, or a crash between them either loses the event or announces a change that never happened. Events are written to an outbox table in the same transaction as the aggregate; a relay publishes them at-least-once, and consumers de-duplicate."
  ),
  code(
    "typescript",
    "policies/application/issue-policy.use-case.ts",
    `
@Injectable()
export class IssuePolicyUseCase {
  constructor(
    private readonly uow: UnitOfWork,
    private readonly policies: PolicyRepository,
    private readonly idempotency: IdempotencyStore,
    private readonly outbox: Outbox,
    private readonly numbering: PolicyNumbering,
  ) {}

  execute(cmd: IssuePolicyCommand, ctx: { idempotencyKey: string }) {
    return this.uow.run(async (tx) => {
      const replay = await this.idempotency.find(tx, ctx.idempotencyKey, cmd);
      if (replay) return replay.response;

      const policy = await this.policies.load(tx, cmd.policyId);
      policy.transition({ status: 'issued', policyNumber: await this.numbering.next(tx) });

      // UPDATE ... WHERE id = :id AND version = :expected  (0 rows => ConcurrencyError)
      await this.policies.save(tx, policy);
      await this.outbox.add(tx, policy.pullEvents());

      const response = toResponse(policy);
      await this.idempotency.record(tx, ctx.idempotencyKey, cmd, response);
      return response;
    });
  }
}
`
  ),
  p(
    "Note how much of the correctness comes from *one transaction boundary per use-case*. The unit of work is owned by the use-case, not scattered across repositories, so it is obvious in code review what commits atomically."
  ),

  h2("Money is not a number"),
  p(
    "Floating point has no place near premiums, limits or taxes. Money is a value object over integer minor units (or a decimal type), always paired with a currency, and arithmetic across currencies throws. The subtle one is **allocation**: splitting a premium across coverages or instalments must sum back to exactly the original amount, so the remainder is distributed with the largest-remainder method instead of rounding each part independently."
  ),
  code(
    "typescript",
    "platform/money.ts (excerpt)",
    `
export class Money {
  private constructor(private readonly minor: bigint, readonly currency: Currency) {}

  static ofMinor(minor: bigint, currency: Currency) {
    return new Money(minor, currency);
  }

  add(other: Money): Money {
    this.assertSameCurrency(other);
    return new Money(this.minor + other.minor, this.currency);
  }

  // Parts always sum to the whole; leftover minor units go to the largest remainders.
  allocate(weights: readonly number[]): Money[] {
    const total = weights.reduce((a, b) => a + b, 0);
    const shares = weights.map((w) => (this.minor * BigInt(w)) / BigInt(total));
    let leftover = this.minor - shares.reduce((a, b) => a + b, 0n);

    return shares.map((share, i) => {
      const extra = leftover > 0n && i < Number(leftover) ? 1n : 0n;
      return new Money(share + extra, this.currency);
    });
  }
}
`
  ),
  p(
    "A lint rule bans `number` in money-typed fields, and the DTO layer parses amounts from strings, never from JSON numbers, so a client’s float can’t sneak in at the boundary."
  ),

  h2("API design and contracts"),
  p(
    "The HTTP boundary is where untrusted input becomes typed domain commands, so it gets strict treatment. DTOs are validated with `class-validator` under `whitelist` and `forbidNonWhitelisted`, so unknown fields are rejected instead of silently ignored. Errors are returned as RFC 7807 `application/problem+json` with stable machine-readable codes, so the React app can branch on a code rather than parsing a message. Routes are URI-versioned, and list endpoints use cursor pagination so deep pages stay cheap."
  ),
  code(
    "typescript",
    "main.ts",
    `
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useLogger(app.get(Logger));
  app.enableVersioning({ type: VersioningType.URI });
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
  );
  app.useGlobalFilters(new ProblemDetailsFilter());

  // SIGTERM => stop accepting, finish in-flight work, close pools (see resilience section)
  app.enableShutdownHooks();

  await app.listen(3000);
}
bootstrap();
`
  ),
  p(
    "The OpenAPI document is generated from the same decorators and DTOs, and a typed client is generated from it for the front end. That closes the loop: change a DTO and the React build breaks at the exact call sites that need updating, which is a much better place to discover a contract change than production."
  ),

  h2("Getting to 1,000 RPS at 150ms p95"),
  p(
    "The rule I followed: **measure, then change one thing.** Load tests gave us a repeatable baseline, flame graphs showed where CPU actually went, and event-loop delay metrics told us when the single thread was the bottleneck rather than the database. Most of the wins were unglamorous:"
  ),
  ul(
    "**Connection pools sized on purpose.** The move to long-lived processes is a genuine advantage over per-invocation connections, but only if the arithmetic works: pool size × pods must stay comfortably under the database’s connection limit, including during a rolling deploy when old and new pods overlap.",
    "**Killing N+1 queries** and reading query plans for the hot paths. Explicit `select` lists and batched loads beat clever ORM relations every time.",
    "**Reference data cached in-process as immutable, versioned snapshots** with stale-while-revalidate refresh, so rating tables aren’t fetched per request. Because the rules are pure functions of a snapshot, cache invalidation reduces to “swap the snapshot reference”.",
    "**Protecting the event loop.** Anything CPU-heavy or unbounded stays off the request thread, whether that means a worker pool for heavy rating computation or chunking large loops. A blocked event loop shows up as latency for every request, not just the slow one.",
    "**Work off the request path.** Notifications, document generation and downstream sync are driven from the outbox instead of being awaited inline.",
    "**Deadlines, not just timeouts.** A request carries a time budget that shrinks as it fans out, so a slow dependency can’t consume the whole p95 budget."
  ),
  p(
    "None of these is exotic. The value of moving off serverless was that all of them became *available*: a process that lives long enough to warm a cache, hold a pool and expose meaningful runtime metrics."
  ),

  h2("Resilience lives in the code, too"),
  p(
    "Cluster-level redundancy only helps if the application cooperates. Outbound calls have explicit timeouts. Retries use exponential backoff with **full jitter** (so a recovering dependency isn’t hit by a synchronised stampede) and only apply to operations that are safe to repeat. Circuit breakers and bulkheads stop one failing dependency from exhausting the pool for everything else."
  ),
  code(
    "typescript",
    "platform/retry.ts",
    `
export async function withRetry<T>(
  fn: (attempt: number) => Promise<T>,
  opts = { retries: 3, baseMs: 100, capMs: 2000 },
): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await fn(attempt);
    } catch (err) {
      if (attempt >= opts.retries || !isRetryable(err)) throw err;

      const ceiling = Math.min(opts.capMs, opts.baseMs * 2 ** attempt);
      await sleep(Math.random() * ceiling); // full jitter
    }
  }
}
`
  ),
  p(
    "Graceful shutdown deserves a mention because Kubernetes exercises it constantly. On `SIGTERM` the service flips readiness to failing so it leaves the load balancer, finishes in-flight requests, stops the outbox relay cleanly, and drains its database pool before exiting. Readiness (“should I get traffic?”) and liveness (“should I be restarted?”) are deliberately different checks; conflating them is how a slow dependency becomes a restart storm."
  ),

  h2("Observability developers actually use"),
  p(
    "The original pain point was tracing one policy issuance across several functions. The rebuild treats that as a first-class requirement. Every request gets a correlation id, held in `AsyncLocalStorage` so it’s attached to every log line without threading it through function arguments. Logs are structured JSON. Traces are propagated end to end with OpenTelemetry, so one issuance is one trace across services. And alongside the usual rate/errors/duration metrics we emit **domain metrics** (policies issued per minute, referral rate, decision latency), because a healthy HTTP layer can still hide a business problem."
  ),

  h2("Testing strategy"),
  p(
    "The 90% unit coverage number is a floor enforced in CI, not a goal in itself. What matters is where the tests concentrate. The domain layer is pure, so its tests are fast and numerous. Integration tests run the app against real dependencies in service containers, so ORM behaviour, migrations and serialisation are exercised for real instead of mocked away."
  ),
  p(
    "For the rules and rating logic, example-based tests aren’t enough, because the interesting bugs live in combinations nobody thought to write down. **Property-based tests** state invariants and let the framework hunt for counter-examples: premium never decreases as the sum insured rises, allocated parts always sum to the whole, an unchanged input always produces an identical decision."
  ),
  code(
    "typescript",
    "underwriting/rating.spec.ts",
    `
it('premium never decreases as sum insured increases', () => {
  fc.assert(
    fc.property(
      fc.integer({ min: 1, max: 50_000_000 }),
      fc.integer({ min: 1, max: 1_000_000 }),
      (base, delta) => {
        const lower = rate(riskWith({ sumInsured: base }));
        const higher = rate(riskWith({ sumInsured: base + delta }));
        expect(higher.premium.gte(lower.premium)).toBe(true);
      },
    ),
  );
});
`
  ),
  p(
    "On top sits the **regression suite**: scenario-level flows (quote, refer, bind, endorse, cancel) replayed against the full stack, with outcomes compared to approved “golden” results. During a migration this answers the only question that really matters: **does the new system make the same decisions as the old one?**"
  ),

  h2("The React front end"),
  p(
    "The new React application replaced a fragmented experience with a single interface for building and managing policies. Because the API contract is generated, the client types can’t drift from the server. The policy builder mirrors the backend’s state machine, so the UI only offers the actions that are legal for the policy’s current state, and server-side validation errors map back onto form fields via the stable error codes described earlier."
  ),

  h2("Delivery: automated end to end"),
  p(
    "The design principle is simple: **the pipeline is the only path to production.** Nobody runs `kubectl apply` against prod and nobody pushes an image from a laptop. Every gate is a required status check, and GitHub Actions is used extensively to run them."
  ),
  {
    type: "pipeline",
    stages: [
      {
        name: "Pull request",
        items: [
          "Lint + typecheck + architecture rules",
          "Unit tests, 90% coverage gate",
          "Integration tests",
          "AI code review",
        ],
      },
      {
        name: "Verify",
        items: [
          "Regression suite",
          "SonarQube quality gate",
          "Snyk: SCA, SAST, IaC",
        ],
      },
      {
        name: "Package",
        items: [
          "Build image (BuildKit cache)",
          "Docker image scan",
          "Push to registry via OIDC",
        ],
      },
      {
        name: "Promote",
        items: [
          "Bump GitOps repo",
          "ArgoCD sync",
          "Rollback = git revert",
        ],
      },
    ],
  },
  table(
    ["Gate", "Tooling", "Blocks merge?", "What it catches"],
    [
      [
        "Static checks",
        "ESLint, Prettier, `tsc --noEmit`, dependency-cruiser",
        "Yes",
        "Type errors, banned patterns, layering violations",
      ],
      [
        "Unit tests",
        "Jest, coverage threshold 90%",
        "Yes",
        "Domain-rule regressions, untested branches",
      ],
      [
        "Integration tests",
        "Jest + Supertest against service containers",
        "Yes",
        "Wiring, migrations, real-driver behaviour that mocks hide",
      ],
      [
        "Regression suite",
        "Scenario tests on an ephemeral stack",
        "Yes",
        "Behavioural drift in policy and underwriting outcomes",
      ],
      [
        "Quality gate",
        "SonarQube",
        "Yes (new code)",
        "Bugs, code smells, duplication, security hotspots",
      ],
      [
        "Dependency + code security",
        "Snyk (Open Source, Code, IaC)",
        "Yes (high and up)",
        "Vulnerable transitive deps, injection flaws, risky Terraform",
      ],
      [
        "Image scan",
        "Docker image scan",
        "Yes (critical, high)",
        "OS-layer and base-image CVEs before the image is published",
      ],
      [
        "AI review",
        "LLM reviewer, domain rubric",
        "No (advisory)",
        "Logic, authz, idempotency and migration-safety concerns",
      ],
    ]
  ),
  p(
    "Cheap deterministic checks run first, expensive ones run in parallel behind them, and superseded runs are cancelled. The SonarQube gate applies to **new code**, so legacy debt never blocks a hotfix but nothing new lands with lower coverage or a fresh security hotspot. Snyk covers dependencies, our own source, and Terraform. The image is built and scanned **before** it’s pushed, so a vulnerable image never reaches the registry, and AWS access uses short-lived OIDC credentials rather than stored keys."
  ),
  code(
    "yaml",
    ".github/workflows/ci.yml (excerpt)",
    `
name: ci

on:
  pull_request:
    branches: [main]

concurrency:
  group: ci-\${{ github.ref }}
  cancel-in-progress: true

permissions:
  contents: read

jobs:
  static:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npx depcruise src --config .dependency-cruiser.js

  unit:
    needs: static
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm
      - run: npm ci
      # jest.config.ts enforces the 90% global coverage threshold
      - run: npm run test:cov
`
  ),

  h3("AI review on every pull request"),
  p(
    "The newest layer is an AI reviewer that comments on every pull request. I want to be precise about what it’s for, because the failure mode of this idea is a noisy bot everyone learns to ignore. Linters and SonarQube own style and known anti-patterns; humans own design and product judgement. The gap in between is the tedious, attention-hungry middle of review: “did you add the authorisation decorator to the new route”, “is this migration safe while old pods are still running”, “this loop issues a query per row”. An LLM given the diff, the surrounding files and a domain-specific rubric is good at exactly that."
  ),
  code(
    "markdown",
    ".github/review-rubric.md (excerpt)",
    `
1. Money: flag any floating-point arithmetic on premiums, limits or taxes.
2. Idempotency: every POST/PUT/PATCH that changes state must honour Idempotency-Key.
3. Concurrency: aggregate saves must check the version; flag blind UPDATEs.
4. AuthZ: every new route must declare @Scopes(); flag anything missing.
5. Migrations: must be expand/contract safe while N-1 pods are running.
6. Data access: flag N+1 queries, unbounded findAll(), missing pagination.
7. Layering: domain code must not import framework or infrastructure.
8. Do NOT comment on formatting or naming; ESLint and Prettier own that.
`
  ),
  ul(
    "**Advisory, not blocking.** A probabilistic reviewer must never be a required check. It posts inline comments and a summary; humans still approve and merge.",
    "**The PR is untrusted input.** Diffs and comments can contain prompt-injection attempts, so the reviewer runs with read-only repo access, only on same-repo PRs, using `pull_request` rather than `pull_request_target`.",
    "**Signal over volume.** Comments are capped, de-duplicated across runs, and anchored to lines. If it has nothing useful to say, it says nothing.",
    "**Context, not just the diff.** It’s given the changed files in full plus the module’s README and relevant ADRs, so it judges a change against intent."
  ),
  p(
    "Human reviewers now arrive at a pull request where the mechanical issues are already flagged and spend their attention on design. I think of it as a junior reviewer with infinite stamina and no ego: useful, occasionally wrong, and never the final word."
  ),

  h2("The platform underneath"),
  p(
    "The platform is the part where I’d describe myself as a capable practitioner rather than a specialist, and I owned it at the level the software needed. In brief:"
  ),
  ul(
    "**Terraform** provisions everything (EKS, networking, supporting AWS resources) identically across dev, staging and production. Environments differ only in variable files, changes go through pull requests with the plan posted as a comment, and applies happen only on merge. Standing up an environment went from a multi-day manual process to something reproducible, and drift became detectable instead of a surprise.",
    "**GitOps with ArgoCD.** The cluster’s desired state lives in Git and CI ends by committing an image bump, never by touching the cluster. Deployments are declarative, drift is self-healed, and **rollback is a `git revert`**. That property is why releases went from something we were nervous about to something we trusted.",
    "**Istio** (via Helm) provides mutual TLS between pods and token-based authentication between services, so identity and transport security live in the platform rather than in every service’s code. Strict mTLS says *which service* is calling; the JWT says *on whose behalf*.",
    "**Multi-AZ resilience and DR.** Replicas are spread across zones, disruption budgets protect quorum during node upgrades, backups follow the real recovery point objective, and we regularly test that the recovery path works. A failover that has never been triggered is a hypothesis, not a safety net."
  ),

  h2("Migrating a live system with no maintenance window"),
  p(
    "Migrating a live financial platform without a maintenance window is stressful in the moment. What made it tractable was refusing to treat cutover as a single event."
  ),
  ol(
    "**Behavioural parity first.** Before any real traffic moved, the regression suite and replayed historical inputs proved the new system reached the same underwriting decisions as the old one.",
    "**Strangler-fig routing.** Endpoints moved behind a routing layer context by context, instead of all at once.",
    "**Gradual traffic shifting** with rollback conditions tied to error rate and latency.",
    "**Reversibility at every step.** Contract changes and data migrations were expand/contract, so the old path kept working until we were certain, and backing out was always a revert."
  ),

  h2("Where the platform landed"),
  p("After the migration, the platform reliably delivers:"),
  table(
    ["Metric", "Result"],
    [
      ["Throughput", "1,000 requests per second"],
      ["Latency", "150ms at p95"],
      ["Availability", "99.5% uptime"],
      ["Test coverage", "90% unit test coverage across the new codebase"],
      ["Environments", "Reproducible from Terraform, dev → staging → prod"],
      ["Releases", "Declarative and reversible through Git"],
    ]
  ),
  p(
    "The coverage figure deserves a note: it is what makes ongoing refactoring far less risky, and the CI gate keeps it from eroding one “quick fix” at a time."
  ),

  h2("What I would tell someone starting a similar migration"),
  ol(
    "**Rebuild domain boundaries, don’t just port code.** Serverless architectures accumulate structure that doesn’t map cleanly onto services. A move to Kubernetes is a good forcing function to fix that, and skipping it just carries the mess forward.",
    "**Get the correctness primitives in before the features.** Idempotency, optimistic concurrency and an outbox are dramatically cheaper to design in than to retrofit onto a live money-moving system.",
    "**Make illegal states unrepresentable.** State machines and value objects turn whole categories of production incidents into compile errors.",
    "**Test the decisions, not just the code.** Golden-master and property-based tests on the rules engine were worth more during the migration than any amount of line coverage.",
    "**Measure before you optimise,** and remember that the main performance win of a long-running service is that caches, pools and metrics finally exist.",
    "**Automate every gate you can, and keep AI advisory.** The pipeline should be the only road to production, and an AI reviewer earns its place by being domain-aware and quiet.",
    "**DR isn’t done until you’ve tested it.**"
  ),
  h3("What I would add next"),
  p(
    "Software-side, I’d push further on contract testing between services and on mutation testing for the rules engine. Platform-side, signing images and verifying signatures at admission, generating SBOMs, and moving to progressive delivery with automated analysis. None of that changes the shape of the system; it hardens the same idea, which is that trust should be produced by automation and verified by machines."
  ),
  p(
    "The resulting system is observable, reproducible and resilient, and it was worth the process. If you’re working through a serverless-to-Kubernetes move, domain-driven NestJS design, or the CI/CD around it, I’m happy to compare notes."
  ),
];

export const posts = [
  {
    slug: "serverless-to-eks-migration",
    title: "Migrating a High-Stakes Insurance Platform from Serverless to EKS",
    seoTitle: "Serverless to EKS Migration: NestJS, DDD and CI/CD",
    category: "Software Engineering",
    date: "20 September, 2026",
    datePublished: "2026-09-20",
    author: "Atreya Rao",
    authorImage: "/img/hero/Atreya_Rao.png",
    cover: "/img/blog/eks-migration.svg",
    ogImage: "/img/blog/eks-migration-og.png",
    excerpt:
      "How I rebuilt a live insurance platform as a domain-driven NestJS service and moved it from serverless to EKS: idempotency, rules engine, performance, CI/CD.",
    tags: [
      "NestJS",
      "TypeScript",
      "Domain-Driven Design",
      "Idempotency",
      "Rules Engine",
      "Performance",
      "AWS EKS",
      "GitHub Actions",
      "SonarQube",
      "Snyk",
    ],
    blocks: eksMigration,
  },
];

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getPost = (slug) => posts.find((post) => post.slug === slug);

export const getHeadings = (post) =>
  post.blocks
    .filter((block) => block.type === "h2")
    .map((block) => ({ id: slugify(block.text), text: block.text }));

const stripInline = (text) => text.replace(/[`*]/g, "");
const countWords = (text) => stripInline(text).split(/\s+/).filter(Boolean).length;

// Prose is read at ~220 wpm; code blocks are skimmed, so they count at a fraction.
export const readingTime = (post) => {
  let prose = 0;
  let codeWords = 0;
  post.blocks.forEach((block) => {
    if (block.text) prose += countWords(block.text);
    if (block.title) prose += countWords(block.title);
    if (block.items)
      block.items.forEach((item) => {
        if (typeof item === "string") prose += countWords(item);
        else if (item.label) prose += countWords(`${item.value} ${item.label}`);
      });
    if (block.stages)
      block.stages.forEach((s) => {
        prose += countWords(s.name) + s.items.reduce((n, i) => n + countWords(i), 0);
      });
    if (block.head) prose += block.head.join(" ").split(/\s+/).length;
    if (block.rows) block.rows.forEach((row) => (prose += countWords(row.join(" "))));
    if (block.code) codeWords += block.code.split(/\s+/).filter(Boolean).length;
  });
  return Math.max(1, Math.round(prose / 220 + codeWords / 500));
};
