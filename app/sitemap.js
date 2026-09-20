import { absoluteUrl } from "@/utility/site";
import { posts } from "./blog/data";
import { projectHref, projects } from "./portfolio_single/projects";

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

  const projectPages = projects.map((project) => ({
    url: absoluteUrl(projectHref(project.slug)),
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
