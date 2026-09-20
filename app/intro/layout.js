// Empty template route: keep it out of search results.
export const metadata = { title: "Intro", robots: { index: false, follow: false } };

export default function IntroLayout({ children }) {
  return children;
}
