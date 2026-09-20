import { pageMetadata } from "@/utility/site";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Selected projects by Atreya Rao: full stack web apps, a React Native mobile app and e-commerce builds using React, Node.js, MongoDB and AWS.",
  path: "/portfolio",
});

export default function PortfolioLayout({ children }) {
  return children;
}
