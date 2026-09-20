import { absoluteUrl } from "@/utility/site";
import { posts } from "./blog/data";
import projects from "./portfolio_single/data";

export default function sitemap() {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/skills", priority: 0.8 },
    { path: "/portfolio", priority: 0.9 },
    { path: "/blog", priority: 0.8 },
    { path: "/contact", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority,
  }));

  const projectPages = Object.keys(projects).map((id) => ({
    url: absoluteUrl("/portfolio_single?id=" + id),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const blogPages = posts.map((post) => ({
    url: absoluteUrl("/blog/" + post.slug),
    lastModified: post.datePublished,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...projectPages, ...blogPages];
}
