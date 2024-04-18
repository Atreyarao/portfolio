import { Copyright2 } from "@/layouts/Copyright";
import NikolasLayout from "@/layouts/NikolasLayout";
const page = () => {
  return (
    <NikolasLayout noFooter>
      <div className="nicolas_sm_blog_details">
        <div className="nicolas_sm_page_title">
          <div className="container">
            <div className="page_title_in">
              <span>Branding</span>
              <p>26 January, 2024 / Comments (0)</p>
              <h3>
                Digital and physical <br />
                brand design
              </h3>
              <div className="info_box">
                <div className="info">
                  <div className="image">
                    <img src="img/blog/7.jpg" alt={7} />
                  </div>
                  <div className="title">
                    <span>Written by</span>
                    <h3>Willomson</h3>
                  </div>
                </div>
                <div className="title">
                  <span>Viewed</span>
                  <h3>3 min read</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_image">
          <img src="img/blog/8.jpg" alt={8} />
        </div>
        {/* Details */}
        <div className="container">
          <div className="extra_container">
            <div className="blog_details">
              <div className="details">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor adipisci velit, sed quia non numquam
                  eius modi tempora incidunt ut labore et dolore magnam aliquam
                  enim nostrum exercitationem ullam corporis suscipit
                  laboriosam,
                </p>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is circumstances occur in
                  which toil and pain can procure him some great pleasure. To
                  take a trivial example, which undertake laborious physical
                  exercise, except to obtain some advantage from it? But who has
                  any right to find fault with a man who chooses to enjoy a
                  pleasure
                </p>
                <div className="quotes">
                  <img
                    className="sm_svg"
                    src="img/svg/left_quotes.svg"
                    alt={1}
                  />
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men demoralized by the charms of pleasure of the
                    moments, so blinded by desire, that they cannot foresee the
                    pain and trouble that are bound to ensue
                  </p>
                  <span>Polina Viola</span>
                </div>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is circumstances occur in
                  which toil and pain can procure him some great pleasure. To
                  take a trivial example, which undertake laborious physical
                  exercise, except to obtain some advantage from it? But who has
                  any right to find fault with a man who chooses to enjoy a
                  pleasure
                </p>
                <div className="title">
                  <h3>Integrating Design, Branding and Marketing</h3>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam enim nostrum exercitationem ullam corporis
                    suscipit laboriosam,
                  </p>
                  <div className="image">
                    <img src="img/blog/9.jpg" alt={9} />
                  </div>
                  <h3>Weaving Visual Narratives</h3>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was account of the
                    system, and expound the actual teachings of the great
                    explorer of the truth, the master-builder of human
                    happiness. No one rejects, dislikes, or avoids pleasure
                    itself, because it is pleasure, but because those who do not
                    know how to pursue pleasure rationally encounter
                    consequences
                  </p>
                </div>
                <div className="posted">
                  <div className="left">
                    <h3>Posted in:</h3>
                    <a className="business" href="#">
                      Business
                    </a>
                    <a className="digital" href="#">
                      Digital
                    </a>
                  </div>
                  <div className="right">
                    <h3>Share:</h3>
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              className="sm_svg"
                              src="img/svg/facebook.svg"
                              alt={1}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="sm_svg"
                              src="img/svg/twitter.svg"
                              alt={2}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="sm_svg"
                              src="img/svg/instagram.svg"
                              alt={3}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="sm_svg"
                              src="img/svg/linkedin.svg"
                              alt={4}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer">
                  <h3>Leave a Reply</h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <ul>
                    <li>
                      <input type="text" placeholder="Name" />
                    </li>
                    <li>
                      <input type="email" placeholder="Email" />
                    </li>
                  </ul>
                  <textarea
                    name="comment"
                    placeholder="Write Comment"
                    defaultValue={""}
                  />
                  <div className="button">
                    <a href="#">
                      Post Comment <img src="img/header/arrow.png" alt={1} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="sidebar">
                <div className="title">
                  <h3>Search</h3>
                </div>
                <div className="search">
                  <input type="text" placeholder="Search" />
                  {/* <input type="submit" defaultValue="" /> */}
                  <button className="search_btn">
                    <img className="sm_svg" src="img/svg/search.svg" alt={1} />
                  </button>
                </div>
                <div className="categories">
                  <div className="title">
                    <h3>Categories</h3>
                  </div>
                  <ul>
                    <li>
                      <div className="list_inner">
                        <a className="category_name" href="#">
                          Creative
                        </a>
                        <a className="icon" href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/arrow.svg"
                            alt={1}
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <a className="category_name" href="#">
                          Business
                        </a>
                        <a className="icon" href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/arrow.svg"
                            alt={1}
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <a className="category_name" href="#">
                          Design
                        </a>
                        <a className="icon" href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/arrow.svg"
                            alt={1}
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <a className="category_name" href="#">
                          Marketing
                        </a>
                        <a className="icon" href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/arrow.svg"
                            alt={1}
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <a className="category_name" href="#">
                          Lifestyle
                        </a>
                        <a className="icon" href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/arrow.svg"
                            alt={1}
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="recent_post">
                  <div className="title">
                    <h3>Recent Post</h3>
                  </div>
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="image">
                          <a href="#">
                            <img src="img/blog/10.jpg" alt={10} />
                          </a>
                        </div>
                        <div className="info">
                          <div className="time">
                            <span>
                              <img src="img/blog/clock.png" alt="clock" />
                            </span>
                            <span>26 January, 2024</span>
                          </div>
                          <div className="info_title">
                            <h3>
                              <a href="#">The main thing for the designer</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="image">
                          <a href="#">
                            <img src="img/blog/11.jpg" alt={11} />
                          </a>
                        </div>
                        <div className="info">
                          <div className="time">
                            <span>
                              <img src="img/blog/clock.png" alt="clock" />
                            </span>
                            <span>26 January, 2024</span>
                          </div>
                          <div className="info_title">
                            <h3>
                              <a href="#">The services provide for design</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="image">
                          <a href="#">
                            <img src="img/blog/12.jpg" alt={12} />
                          </a>
                        </div>
                        <div className="info">
                          <div className="time">
                            <span>
                              <img src="img/blog/clock.png" alt="clock" />
                            </span>
                            <span>26 January, 2024</span>
                          </div>
                          <div className="info_title">
                            <h3>
                              <a href="#">The main thing for the designer</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tags">
                  <div className="title">
                    <h3>Tags</h3>
                  </div>
                  <a href="#">Business</a>
                  <a href="#">Digital</a>
                  <a href="#">Audio post</a>
                  <a href="#">Gallery post</a>
                  <a href="#">Marketing</a>
                  <a href="#">Agency</a>
                  <a href="#">Graphic</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Details */}
      </div>
      <Copyright2 />
    </NikolasLayout>
  );
};
export default page;
