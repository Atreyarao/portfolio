// One-page duplicate of the home page: point search engines at the canonical "/".
export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function OnePageLayout({ children }) {
  return children;
}
