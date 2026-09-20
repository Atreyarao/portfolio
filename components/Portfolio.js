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
                <Link href="/portfolio">All Projects</Link>
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
                    <img loading="lazy" decoding="async" src="/img/portfolio/shiftly-1.jpg" alt="Shiftly healthcare shift marketplace website" />
                    <Link className="nicolas_sm_full_link" href="/portfolio_single/shiftly" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">Full Stack &amp; Mobile</a>
                      <h3>
                        <Link href="/portfolio_single/shiftly">Shiftly</Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="/portfolio_single/shiftly">
                        <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="https://www.odetoparis.com/images/logo.webp" alt="Ode To Paris tour management platform logo" />
                    <Link className="nicolas_sm_full_link" href="/portfolio_single/ode-to-paris" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">Full Stack</a>
                      <h3>
                        <Link href="/portfolio_single/ode-to-paris">Ode To Paris</Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="/portfolio_single/ode-to-paris">
                        <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img loading="lazy" decoding="async" src="img/portfolio/weresidents.png" alt="We Residents property management web app" />
                    <Link className="nicolas_sm_full_link" href="/portfolio_single/we-residents" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">Full Stack</a>
                      <h3>
                        <Link href="/portfolio_single/we-residents">We Residents</Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="/portfolio_single/we-residents">
                        <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img loading="lazy" decoding="async"
                      style={{ objectFit: "contain" }}
                      src="img/portfolio/weresidents_mobile_app.png"
                      alt="We Residents mobile app built with React Native"
                    />
                    <Link className="nicolas_sm_full_link" href="/portfolio_single/we-residents-mobile-app" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#"> Mobile App</a>
                      <h3>
                        <Link href="/portfolio_single/we-residents-mobile-app">We Residents Mobile</Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="/portfolio_single/we-residents-mobile-app">
                        <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img loading="lazy" decoding="async" src="img/portfolio/Ticket_main.png" alt="Ticketing system web app" />
                    <Link className="nicolas_sm_full_link" href="/portfolio_single/ticketing-system" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">Full Stack</a>
                      <h3>
                        <Link href="/portfolio_single/ticketing-system">Ticketing System</Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="/portfolio_single/ticketing-system">
                        <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img loading="lazy" decoding="async" style={{ objectFit: "contain" }} src="img/portfolio/ebook.png" alt="React E-Book reader" />
                    <Link className="nicolas_sm_full_link" href="/portfolio_single/react-ebook" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">Front End</a>
                      <h3>
                        <Link href="/portfolio_single/react-ebook">Ebook React JS</Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="/portfolio_single/react-ebook">
                        <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    {/* <img loading="lazy" decoding="async" src="img/portfolio/5.jpg" alt="" /> */}
                    <video
                      src="img/portfolio/simplefashion.mp4"
                      controls
                      style={{ objectFit: "cover" }}
                    />
                    {/* <Link
                      className="nicolas_sm_full_link"
                      href="/portfolio_single"
                    /> */}
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">Shopify Store</a>
                      <h3>
                        <Link href="/portfolio_single/simple-fashion-ecommerce">E-commerce site design and build</Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="/portfolio_single/simple-fashion-ecommerce">
                        <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li>
                <div className="list_inner">
                  <div className="image">
                    <img loading="lazy" decoding="async" src="img/portfolio/6.jpg" alt="" />
                    <Link
                      className="nicolas_sm_full_link"
                      href="/portfolio_single"
                    />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <a href="#">// Graphic design</a>
                      <h3>
                        <Link href="/portfolio_single">
                          Paper &amp; Book Covers Design
                        </Link>
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="/portfolio_single">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
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
