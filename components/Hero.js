const Hero = () => {
  return (
    <div className="nicolas_sm_section" id="home">
      <div className="nicolas_sm_hero">
        <div className="container">
          <h1 className="sr_only">
            Atreya Rao, Full Stack and React Native Developer for Hire (React, Node.js, NestJS, AWS)
          </h1>
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
              <img className="sm_svg bounce" src="img/svg/down_arrow.svg" alt="" />
            </span>
          </div>
          <div className="overlay_el">
            <div className="overlay_bg" />
            <div className="overlay_content">
              <div className="hero_info_area">
                <div className="left">
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="" />
                    <h3>About me</h3>
                    <p>
                      Hi, I'm Atreya Rao, Software Engineer 2 @ Deloitte USI, a full stack developer who
                      builds products from scratch. Open to full-time roles and freelance or contract work.
                    </p>
                  </div>
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="" />
                    <h3>What i do</h3>
                    <p>
                      Front End Development 🧑‍💻 / Mobile Development 📱 / Backend Development / Build
                      Products 👷‍♂️
                    </p>
                  </div>
                </div>
                <div className="center">
                  <span>
                    <img src="img/hero/Atreya_Rao.png" alt="Atreya Rao, full stack software engineer" />
                  </span>
                </div>
                <div className="right">
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="" />
                    <h3>Contact me</h3>
                    <p>
                      Email: atreyarao70@gmail.com <br />
                      Mobile number: +91 7095317965
                    </p>
                  </div>
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="" />
                    {/* <h3 style={{textAlign:'center'}}>Contract me</h3> */}
                    <ul className="social">
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/facebook.svg"
                            alt="Facebook"
                          />
                        </a>
                      </li> */}
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/twitter.svg"
                            alt="Twitter"
                          />
                        </a>
                      </li> */}
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/instagram.svg"
                            alt="Instagram"
                          />
                        </a>
                      </li> */}
                      <li>
                        <a
                          target="__blank"
                          href="https://www.linkedin.com/in/atreya-rao-ba7a47168/"
                         aria-label="LinkedIn profile">
                          <img className="sm_svg" src="img/svg/linkedin.svg" alt="LinkedIn profile" />
                        </a>
                      </li>
                      <li>
                        <a target="__blank" href="/Documents/resume.pdf" aria-label="Download résumé (PDF)">
                          <img className="sm_svg" src="img/svg/resume.svg" alt="Download résumé (PDF)" />
                        </a>
                      </li>
                      <li>
                        <a target="__blank" href="https://wa.me/7095317965" aria-label="Chat on WhatsApp">
                          <img className="sm_svg" src="img/svg/whatsapp.svg" alt="Chat on WhatsApp" />
                        </a>
                      </li>
                      <li>
                        <a href="mailto:atreyarao70@gmail.com" aria-label="Email Atreya Rao">
                          <img className="sm_svg" src="img/svg/gmail.svg" alt="Email Atreya Rao" />
                        </a>
                      </li>
                      <li>
                        <a target="__blank" href="https://github.com/atreyarao" aria-label="GitHub profile">
                          <img className="sm_svg" src="img/svg/git.svg" alt="GitHub profile" />
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/behance.svg"
                            alt="Behance"
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
