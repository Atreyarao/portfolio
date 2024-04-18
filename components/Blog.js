import Link from "next/link";
import Marquee from "react-fast-marquee";

const Blog = () => {
  return (
    <div className="nicolas_sm_section" id="blog">
      <div className="nicolas_sm_blog">
        <div className="nicolas_sm_extra_title">
          <div className="container">
            <div className="projects">
              <span>08 // News blog</span>
              <Link href="blog">(( All Posts ))</Link>
            </div>
          </div>
          <Marquee className="title marquee">
            <div className="wrap">
              <div>
                <h3>News</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">News</h3>
              </div>
              <div>
                <h3>News</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">News</h3>
              </div>
              <div>
                <h3>News</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">News</h3>
              </div>
              <div>
                <h3>News</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">News</h3>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="container">
          <div className="extra_container">
            <ul>
              <li>
                <div className="list_inner">
                  <div className="left">
                    <div className="news">
                      <span>January 26, 2024</span>
                      <h3>
                        <Link href="blog_details">
                          Digital and physical brand design
                        </Link>
                      </h3>
                    </div>
                    <div className="button">
                      <Link href="blog_details">
                        Read the story{" "}
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="right">
                    <div className="image">
                      <img src="img/blog/1.jpg" alt={1} />
                      <Link
                        className="nicolas_sm_full_link"
                        href="blog_details"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="left">
                    <div className="news">
                      <span>January 26, 2024</span>
                      <h3>
                        <Link href="blog_details">
                          The transformation of mobile app designing
                        </Link>
                      </h3>
                    </div>
                    <div className="button">
                      <Link href="blog_details">
                        Read the story{" "}
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="right">
                    <div className="image">
                      <img src="img/blog/2.jpg" alt={2} />
                      <Link
                        className="nicolas_sm_full_link"
                        href="blog_details"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="left">
                    <div className="news">
                      <span>January 26, 2024</span>
                      <h3>
                        <Link href="blog_details">
                          A beginner’s guide to running adventures
                        </Link>
                      </h3>
                    </div>
                    <div className="button">
                      <Link href="blog_details">
                        Read the story{" "}
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="right">
                    <div className="image">
                      <img src="img/blog/3.jpg" alt={3} />
                      <Link
                        className="nicolas_sm_full_link"
                        href="blog_details"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
