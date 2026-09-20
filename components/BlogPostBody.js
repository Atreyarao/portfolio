import { slugify } from "@/app/blog/data";

// Splits a string on `code`, **bold** and [text](url) and renders each part.
const INLINE = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

const Inline = ({ text }) =>
  text.split(INLINE).map((part, i) => {
    if (part.startsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    if (part.startsWith("**"))
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link)
      return (
        <a key={i} href={link[2]}>
          {link[1]}
        </a>
      );
    return part;
  });

const Block = ({ block }) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={slugify(block.text)}>
          <Inline text={block.text} />
        </h2>
      );
    case "h3":
      return (
        <h3>
          <Inline text={block.text} />
        </h3>
      );
    case "p":
      return (
        <p>
          <Inline text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="post_list">
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="post_list ordered">
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ol>
      );
    case "code":
      return (
        <figure className="post_code">
          <figcaption>
            <span>{block.title}</span>
            <span className="lang">{block.lang}</span>
          </figcaption>
          <p className="note">
            Rough skeleton only, not the actual implementation. The real code
            is confidential and can’t be shared.
          </p>
          <pre tabIndex={0}>
            <code>{block.code}</code>
          </pre>
        </figure>
      );
    case "callout":
      return (
        <aside className="post_callout">
          <h4>{block.title}</h4>
          <p>
            <Inline text={block.text} />
          </p>
        </aside>
      );
    case "table":
      return (
        <div className="post_table">
          <table>
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th key={i}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "stats":
      return (
        <div className="post_stats">
          {block.items.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      );
    case "pipeline":
      return (
        <div className="post_pipeline">
          {block.stages.map((stage, i) => (
            <div className="stage" key={stage.name}>
              <span className="step">0{i + 1}</span>
              <h4>{stage.name}</h4>
              <ul>
                {stage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

const BlogPostBody = ({ blocks }) => (
  <article className="post_body">
    {blocks.map((block, i) => (
      <Block key={i} block={block} />
    ))}
  </article>
);

export default BlogPostBody;
