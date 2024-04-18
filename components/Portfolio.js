import Link from "next/link";
import Marquee from "react-fast-marquee";

const Portfolio = ({ noTitle = false }) => {
  return (
    <div className="nicolas_sm_section" id="portfolio">
      <div className="nicolas_sm_portfolio">
        <div className="nicolas_sm_extra_title">
          {!noTitle && (
            <div className="container">
              <div className="projects">
                <span> let me show you</span>
                <Link href="portfolio">(( project all ))</Link>
              </div>
            </div>
          )}
          <Marquee className="title marquee">
            <div className="wrap">
              <div>
                <h3>Work</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
              <div>
                <h3>Work</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
              <div>
                <h3>Work</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
              <div>
                <h3>Work</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="container">
          <div className="portfolio_in">
            <ul>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/weresidents.png" alt={1} />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single?id=1"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">Full Stack</a>
                      <h3>
                        <Link href="portfolio_single?id=1">We Residents</Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single?id=1">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img
                      style={{ objectFit: "contain" }}
                      src="img/portfolio/weresidents_mobile_app.png"
                      alt={2}
                    />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single?id=2"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#"> Mobile App</a>
                      <h3>
                        <Link href="portfolio_single?id=2">
                          We Residents Mobile
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single?id=2">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/Ticket_main.png" alt={3} />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single?id=3"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">Full Stack</a>
                      <h3>
                        <Link href="portfolio_single?id=3">
                          Ticketing System
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single?id=3">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img
                      style={{ objectFit: "contain" }}
                      src="img/portfolio/ebook.png"
                      alt={4}
                    />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single?id=4"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">Front End</a>
                      <h3>
                        <Link href="portfolio_single?id=4">Ebook React JS</Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single?id=4">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    {/* <img src="img/portfolio/5.jpg" alt={5} /> */}
                    <video
                      src="img/portfolio/simplefashion.mp4"
                      controls
                      style={{ objectFit: "cover" }}
                    />
                    {/* <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    /> */}
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">Shopify Store</a>
                      <h3>
                        <Link href="portfolio_single?id=5">
                          E-commerce site design and build
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single?id=5">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/6.jpg" alt={6} />
                    <Link
                      className="nicolas_sm_full_link"
                      href="portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Graphic design</a>
                      <h3>
                        <Link href="portfolio_single">
                          Paper &amp; Book Covers Design
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="portfolio_single">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
