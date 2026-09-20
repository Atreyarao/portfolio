import JsonLd from "@/components/JsonLd";
import { absoluteUrl, pageMetadata } from "@/utility/site";
import { projectHref, projects } from "../portfolio_single/projects";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Selected projects by Atreya Rao: Shiftly, a healthcare shift marketplace, a Paris tour booking platform, full stack web apps and React Native mobile apps.",
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
