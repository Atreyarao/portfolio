import JsonLd from "@/components/JsonLd";
import { absoluteUrl, pageMetadata, site } from "@/utility/site";
import { notFound } from "next/navigation";
import PortfolioSingle from "../PortfolioSingle";
import { getProject, projectHref, projects } from "../projects";

export const dynamicParams = false;

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

const imagePath = (src) =>
  src.startsWith("http") || src.startsWith("/") ? src : "/" + src;

export const generateMetadata = ({ params }) => {
  const project = getProject(params.slug);
  if (!project) return {};

  return pageMetadata({
    title: project.seoTitle || project.title + " – " + project.category,
    description:
      project.seoDescription ||
      project.category +
        ": " +
        project.title +
        ", built with " +
        project.techStack.replace(/\s*,\s*/g, ", ") +
        ". Portfolio case study by Atreya Rao.",
    socialTitle: project.title + " | " + site.name,
    path: projectHref(project.slug),
    image: imagePath(project.ogImage || project.mainImg),
    imageSize: project.ogImageSize || {},
  });
};

const page = ({ params }) => {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const url = absoluteUrl(projectHref(project.slug));
  const image = imagePath(project.ogImage || project.mainImg);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.seoDescription || project.subHeading,
          genre: project.category,
          keywords: project.techStack,
          image: image.startsWith("http") ? image : absoluteUrl(image),
          url,
          mainEntityOfPage: url,
          sameAs: project.link || undefined,
          author: { "@type": "Person", name: site.name, url: absoluteUrl("/") },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: absoluteUrl("/portfolio") },
            { "@type": "ListItem", position: 3, name: project.title, item: url },
          ],
        }}
      />
      <PortfolioSingle project={project} prev={prev} next={next} />
    </>
  );
};
export default page;
