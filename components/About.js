import Marquee from "react-fast-marquee";

const About = ({
  sectionTitle = "About me",
  nextSection = "service",
}) => {
  return (
    <div className="nicolas_sm_section" id="about">
      <div className="nicolas_sm_about">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>{sectionTitle}</span>
            </div>
            <div className="center">
              <p>
                Hi, I'm Atreya, a Lead Developer at EmployWise. With expertise
                in full-stack development, optimizing user experiences and
                platform functionality. From React and React Native to Java and
                MongoDB, I thrive on crafting scalable and secure solutions.
              </p>
            </div>
            <div className="right">
              <div className="scroll anchor">
                <a href={`#${nextSection}`} />
                <img className="sm_svg" src="img/svg/down_arrow.svg" alt={2} />
              </div>
            </div>
          </div>
          <div className="extra_container">
            <div className="biography">
              <ul>
                <li>
                  <div className="list_inner">
                    <span>Born in</span>
                    <h3>India</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Experience</span>
                    <h3>3 years experience</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Date of birth</span>
                    <h3>15 september, 1999</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Language</span>
                    <h3>English,Hindi,Kannada</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nicolas_sm_round">
          <Marquee className="marquee">
            <div className="wrap">
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>10+ full stack projects </h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>3+ years of experience</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>10+ team members</h3>
              </div>
              {/* <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>3 success projects</h3>
              </div> */}
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>100k+ happy users</h3>
              </div>
              {/* <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>30+ team members</h3>
              </div> */}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default About;
