// Single source of truth for SEO: metadata, sitemap, robots and JSON-LD all read from here.
// Set NEXT_PUBLIC_SITE_URL to the production origin (e.g. https://example.com).
const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL
  : null;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  fromVercel ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const absoluteUrl = (path = "/") => siteUrl + path;

export const site = {
  name: "Atreya Rao",
  jobTitle: "Full Stack Software Engineer",
  title: "Atreya Rao | Full Stack Software Engineer – React, Node.js, AWS",
  description:
    "Full stack software engineer specialising in React, Node.js/NestJS and AWS EKS/Kubernetes. Browse projects, skills, résumé and engineering write-ups.",
  ogImage: "/og/default.png",
  linkedin: "https://www.linkedin.com/in/atreya-rao-ba7a47168/",
  github: "https://github.com/atreyarao",
  keywords: [
    "Atreya Rao",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "React Native",
    "Node.js",
    "NestJS",
    "TypeScript",
    "AWS",
    "EKS",
    "Kubernetes",
    "Terraform",
    "GitHub Actions",
    "Portfolio",
  ],
};

// Next.js replaces (not merges) `openGraph`/`twitter` when a page sets them, so every page
// builds its social metadata here to keep image, siteName and locale on every route.
export const pageMetadata = ({
  title,
  description,
  path,
  socialTitle,
  image = site.ogImage,
  imageSize = { width: 1200, height: 630 },
  openGraph = {},
  ...rest
}) => {
  const shareTitle = socialTitle || title + " | " + site.name;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_IN",
      url: path,
      title: shareTitle,
      description,
      images: [{ url: image, alt: shareTitle, ...imageSize }],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image],
    },
    ...rest,
  };
};
