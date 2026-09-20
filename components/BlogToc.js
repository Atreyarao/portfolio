"use client";
import { useEffect, useState } from "react";

const BlogToc = ({ headings }) => {
  const [active, setActive] = useState(headings[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  return (
    <ul className="post_toc">
      {headings.map(({ id, text }) => (
        <li key={id}>
          <a href={`#${id}`} className={active === id ? "active" : ""}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default BlogToc;
