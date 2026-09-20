import JsonLd from "@/components/JsonLd";
import { absoluteUrl, pageMetadata, site } from "@/utility/site";
import data from "./data";
import PortfolioSingle from "./PortfolioSingle";

const imageUrl = (src) => (src.startsWith("http") ? src : "/" + src);

const getProject = (searchParams) => {
  const id = parseInt(searchParams?.id, 10);
  return id >= 1 && id <= 6 ? { id, project: data[id] } : null;
};

export const generateMetadata = ({ searchParams }) => {
  const found = getProject(searchParams);
  if (!found) return { title: "Portfolio", robots: { index: false, follow: true } };

  const { id, project } = found;
  const description =
    project.category +
    ": " +
    project.title +
    ", built with " +
    project.techStack.replace(/\s*,\s*/g, ", ") +
    ". Portfolio case study by Atreya Rao.";
  return pageMetadata({
    title: project.title + " – " + project.category,
    description,
    path: "/portfolio_single?id=" + id,
    image: imageUrl(project.mainImg),
    imageSize: {},
  });
};

const page = ({ searchParams }) => {
  const found = getProject(searchParams);
  return (
    <>
      {found && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: found.project.title,
            description: found.project.subHeading,
            genre: found.project.category,
            keywords: found.project.techStack,
            image: imageUrl(found.project.mainImg).startsWith("http")
              ? imageUrl(found.project.mainImg)
              : absoluteUrl(imageUrl(found.project.mainImg)),
            url: absoluteUrl("/portfolio_single?id=" + found.id),
            author: { "@type": "Person", name: site.name, url: absoluteUrl("/") },
          }}
        />
      )}
      <PortfolioSingle />
    </>
  );
};
export default page;
