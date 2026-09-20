import { permanentRedirect } from "next/navigation";
import { projectSlugById } from "./projects";

// Legacy URL: /portfolio_single?id=N. Send crawlers and old links to the clean
// slug URL (308) without carrying the old query string along.
const page = ({ searchParams }) => {
  const slug = projectSlugById(searchParams?.id);
  permanentRedirect(slug ? "/portfolio_single/" + slug : "/portfolio");
};
export default page;
