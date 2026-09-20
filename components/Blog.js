import { posts, readingTime } from "@/app/blog/data";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Blog = () => {
  return (
    <div className="nicolas_sm_section" id="blog">
      <div className="nicolas_sm_blog">
        <div className="nicolas_sm_extra_title">
          <div className="container">
            <div className="projects">
              <span>08 // Blog</span>
              <Link href="/blog">(( All Posts ))</Link>
            </div>
          </div>
          <Marquee className="title marquee">
            <div className="wrap">
              <div>
                <h3>Blog</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Blog</h3>
              </div>
              <div>
                <h3>Blog</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Blog</h3>
              </div>
              <div>
                <h3>Blog</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Blog</h3>
              </div>
              <div>
                <h3>Blog</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Blog</h3>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="container">
          <div className="extra_container">
            <ul>
              {posts.slice(0, 3).map((post) => {
                const href = `/blog/${post.slug}`;
                return (
                  <li key={post.slug}>
                    <div className="list_inner">
                      <div className="left">
                        <div className="news">
                          <span>
                            {post.date} / {readingTime(post)} min read
                          </span>
                          <h3>
                            <Link href={href}>{post.title}</Link>
                          </h3>
                        </div>
                        <div className="button">
                          <Link href={href}>
                            Read the story{" "}
                            <img
                              className="sm_svg"
                              src="/img/svg/down_arrow.svg"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="right">
                        <div className="image">
                          <img src={post.cover} alt={post.title} />
                          <Link className="nicolas_sm_full_link" href={href} />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
