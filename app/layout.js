import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import Preloader from "@/layouts/Preloader";
import { absoluteUrl, site, siteUrl } from "@/utility/site";
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: "%s | Atreya Rao" },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
    locale: "en_IN",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.name + " – " + site.jobTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171818",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": absoluteUrl("/#person"),
  name: site.name,
  jobTitle: site.jobTitle,
  url: siteUrl,
  image: absoluteUrl("/img/hero/Atreya_Rao.png"),
  description: site.description,
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "React",
    "React Native",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Domain-driven design",
    "AWS",
    "Amazon EKS",
    "Kubernetes",
    "Terraform",
    "GitHub Actions",
    "CI/CD",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: site.name,
  url: siteUrl,
  inLanguage: "en",
  publisher: { "@id": absoluteUrl("/#person") },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts are linked (not CSS @import) so they download in parallel with the stylesheet. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cabin:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap"
        />
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body>
        <CookieConsent />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
