import MarqueeTitle from "@/components/MarqueeTitle";
import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, site } from "@/utility/site";
import { posts, readingTime } from "./data";
import { pageMetadata } from "@/utility/site";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Engineering write-ups by Atreya Rao on NestJS, domain-driven design, Kubernetes migrations, CI/CD and full-stack development.",
  path: "/blog",
});

const page = () => {
  return (
    <NikolasLayout>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Engineering blog by Atreya Rao",
          url: absoluteUrl("/blog"),
          author: { "@type": "Person", name: site.name, url: absoluteUrl("/") },
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: absoluteUrl("/blog/" + post.slug),
            datePublished: post.datePublished,
          })),
        }}
      />
      <h1 className="sr_only">Engineering blog by Atreya Rao</h1>
      {/* Page_title */}
      <div className="nicolas_sm_page_title">
        <div className="container">
          <div className="page_title_in">
            <h3>
              <span className="stroke_text">Engineering </span>
              <span className="underline">notes</span>
              <span className="stroke_text"> from the </span>
              <span className="underline">field</span>
            </h3>
          </div>
        </div>
      </div>
      {/* /Page_title */}
      {/* Blog */}
      <div className="nicolas_sm_blog no_padding blogpage">
        <div className="nicolas_sm_extra_title">
          <MarqueeTitle marqueeText="Blog" />
        </div>
        <div className="container">
          <div className="extra_container">
            <ul>
              {posts.map((post) => {
                const href = `/blog/${post.slug}`;
                return (
                  <li key={post.slug}>
                    <div className="list_inner">
                      <div className="left">
                        <div className="news">
                          <span>
                            {post.date} / {readingTime(post)} min read
                          </span>
                          <h3>
                            <Link href={href}>{post.title}</Link>
                          </h3>
                          <p className="post_excerpt">{post.excerpt}</p>
                        </div>
                        <div className="button">
                          <Link href={href}>
                            Read the story{" "}
                            <img
                              className="sm_svg"
                              src="/img/svg/down_arrow.svg"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="right">
                        <div className="image">
                          <img src={post.cover} alt={post.title} />
                          <Link className="nicolas_sm_full_link" href={href} />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* /Blog */}
    </NikolasLayout>
  );
};
export default page;
