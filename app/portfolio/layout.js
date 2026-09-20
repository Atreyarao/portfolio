import JsonLd from "@/components/JsonLd";
import { absoluteUrl, pageMetadata } from "@/utility/site";
import { projectHref, projects } from "../portfolio_single/projects";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Selected projects by Atreya Rao: full stack web apps, a React Native mobile app and e-commerce builds using React, Node.js, MongoDB and AWS.",
  path: "/portfolio",
});

export default function PortfolioLayout({ children }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Projects by Atreya Rao",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            url: absoluteUrl(projectHref(project.slug)),
          })),
        }}
      />
      {children}
    </>
  );
}
