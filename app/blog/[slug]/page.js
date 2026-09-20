import BlogPostBody from "@/components/BlogPostBody";
import BlogToc from "@/components/BlogToc";
import JsonLd from "@/components/JsonLd";
import { Copyright2 } from "@/layouts/Copyright";
import NikolasLayout from "@/layouts/NikolasLayout";
import { absoluteUrl, pageMetadata, site } from "@/utility/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHeadings, getPost, posts, readingTime } from "../data";

export const dynamicParams = false;

export const generateStaticParams = () =>
  posts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }) => {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seoTitle,
    description: post.excerpt,
    socialTitle: post.title,
    path: "/blog/" + post.slug,
    image: post.ogImage,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.author],
      tags: post.tags,
    },
  });
};

const page = ({ params }) => {
  const post = getPost(params.slug);
  if (!post) notFound();

  const headings = getHeadings(post);
  const others = posts.filter((other) => other.slug !== post.slug);
  const minutes = readingTime(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.ogImage),
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    inLanguage: "en",
    keywords: post.tags.join(", "),
    articleSection: post.category,
    timeRequired: "PT" + minutes + "M",
    mainEntityOfPage: absoluteUrl("/blog/" + post.slug),
    author: { "@type": "Person", name: post.author, url: absoluteUrl("/") },
    publisher: { "@type": "Person", name: site.name, url: absoluteUrl("/") },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: absoluteUrl("/blog/" + post.slug),
      },
    ],
  };

  return (
    <NikolasLayout noFooter>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="nicolas_sm_blog_details">
        <div className="nicolas_sm_page_title">
          <div className="container">
            <div className="page_title_in">
              <span className="post_category">{post.category}</span>
              <p>
                <time dateTime={post.datePublished}>{post.date}</time>
              </p>
              <h1 className="post_title">{post.title}</h1>
              <div className="info_box">
                <div className="info">
                  <div className="image">
                    <img src={post.authorImage} alt={post.author} />
                  </div>
                  <div className="title">
                    <span>Written by</span>
                    <h3>{post.author}</h3>
                  </div>
                </div>
                <div className="title">
                  <span>Reading time</span>
                  <h3>{minutes} min read</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="extra_container">
            <div className="post_hero">
              <img src={post.cover} alt={post.title} />
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="container">
          <div className="extra_container">
            <div className="blog_details">
              <div className="details">
                <BlogPostBody blocks={post.blocks} />
                <div className="posted">
                  <div className="left">
                    <h3>Posted in:</h3>
                    <span className="business">{post.category}</span>
                  </div>
                  <div className="right">
                    <Link className="post_back" href="/blog">
                      ← All posts
                    </Link>
                  </div>
                </div>
                <div className="footer post_cta">
                  <h3>Working on something similar?</h3>
                  <p>
                    I’m a software engineer working across full-stack
                    development and cloud infrastructure. If you want to talk
                    through EKS migrations, Terraform, CI/CD or service mesh
                    setups, I’d be glad to compare notes.
                  </p>
                  <div className="button">
                    <Link href="/contact">
                      Get in touch <img src="/img/header/arrow.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sidebar post_sidebar">
                <div className="title">
                  <h3>On this page</h3>
                </div>
                <BlogToc headings={headings} />
                {others.length > 0 && (
                  <div className="recent_post">
                    <div className="title">
                      <h3>More posts</h3>
                    </div>
                    <ul>
                      {others.map((other) => (
                        <li key={other.slug}>
                          <div className="list_inner">
                            <div className="info">
                              <div className="time">
                                <span>{other.date}</span>
                              </div>
                              <div className="info_title">
                                <h3>
                                  <Link href={"/blog/" + other.slug}>
                                    {other.title}
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="tags">
                  <div className="title">
                    <h3>Tags</h3>
                  </div>
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Details */}
      </div>
      <Copyright2 />
    </NikolasLayout>
  );
};
export default page;
