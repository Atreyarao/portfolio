const Hero = () => {
  return (
    <div className="nicolas_sm_section" id="home">
      <div className="nicolas_sm_hero">
        <div className="container">
          <div className="hero_text">
            <div className="left">
              <h3 className="stroke_text">Hello world! I'm</h3>
              <h3>
                <span className="inline_text">
                  Atreya Rao
                  <span className="arrow">
                    <div className="wings">
                      <div className="wing">
                        <span className="up" />
                      </div>
                      <div className="wing">
                        <span className="down" />
                      </div>
                    </div>
                  </span>
                </span>
              </h3>
            </div>
            <div className="right">
              <h3>
                <span className="inline_text">Developer</span>
              </h3>
              <h3 className="stroke_text">Based in India</h3>
            </div>
          </div>
          <div className="hero_scroll_title">
            <span>
              <img
                className="sm_svg bounce"
                src="img/svg/down_arrow.svg"
                alt={1}
              />
            </span>
          </div>
          <div className="overlay_el">
            <div className="overlay_bg" />
            <div className="overlay_content">
              <div className="hero_info_area">
                <div className="left">
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="shape" />
                    <h3>About me</h3>
                    <p>
                      Hi, I'm Atreya, a Lead Developer at EmployWise. An
                      aspiring entrepreneur, with ability to built products from
                      scratch.
                    </p>
                  </div>
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="shape" />
                    <h3>What i do</h3>
                    <p>
                      Front End Development 🧑‍💻 / Mobile Development 📱 / Backend
                      Development / Build Products 👷‍♂️
                    </p>
                  </div>
                </div>
                <div className="center">
                  <span>
                    <img src="img/hero/Atreya_Rao.png" alt={1} />
                  </span>
                </div>
                <div className="right">
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="shape" />
                    <h3>Contact me</h3>
                    <p>
                      Email: atreyarao70@gmail.com <br />
                      Mobile number: +91 7095317965
                    </p>
                  </div>
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="shape" />
                    {/* <h3 style={{textAlign:'center'}}>Contract me</h3> */}
                    <ul className="social">
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/facebook.svg"
                            alt={1}
                          />
                        </a>
                      </li> */}
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/twitter.svg"
                            alt={2}
                          />
                        </a>
                      </li> */}
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/instagram.svg"
                            alt={3}
                          />
                        </a>
                      </li> */}
                      <li>
                        <a
                          target="__blank"
                          href="https://www.linkedin.com/in/atreya-rao-ba7a47168/"
                        >
                          <img
                            className="sm_svg"
                            src="img/svg/linkedin.svg"
                            alt={4}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          target="__blank"
                          href="/Documents/resume.pdf"
                        >
                          <img
                            className="sm_svg"
                            src="img/svg/resume.svg"
                            alt={4}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          target="__blank"
                          href="https://wa.me/7095317965"
                        >
                          <img
                            className="sm_svg"
                            src="img/svg/whatsapp.svg"
                            alt={4}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          
                          href="mailto:atreyarao70@gmail.com"
                        >
                          <img
                            className="sm_svg"
                            src="img/svg/gmail.svg"
                            alt={4}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          target="__blank"
                          href="https://github.com/atreyarao"
                        >
                          <img
                            className="sm_svg"
                            src="img/svg/git.svg"
                            alt={4}
                          />
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/behance.svg"
                            alt={5}
                          />
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
