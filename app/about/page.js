import About from "@/components/About";
import Counter from "@/components/Counter";
import MarqueeTitle from "@/components/MarqueeTitle";
import Partners from "@/components/Partners";
import TestimonialSlider from "@/components/TestimonialSlider";
import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
const page = () => {
  return (
    <NikolasLayout>
      {/* Page_title */}
      <div className="nicolas_sm_page_title">
        <div className="container">
          <div className="page_title_in">
            <h3>
              <span className="stroke_text">Say hi from </span>
              <span className="underline">Atreya Rao </span>
              <span className="stroke_text">Full Stack </span>And Mobile{" "}
              <span className="underline">developer</span>
            </h3>
          </div>
        </div>
      </div>
      {/* /Page_title */}
      {/* About_video */}
      {/* <div className="nicolas_sm_about_video">
        <div className="container">
          <div className="extra_container">
            <div className="video_box">
              <img src="img/about/1.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <img className="sm_svg" src="img/svg/playback.svg" alt={1} />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* /About_video */}
      {/* About_me */}
      <About sectionTitle="ABOUT ME" nextSection="counter" />
      {/* /About_me */}
      {/* Counter */}
      <div className="nicolas_sm_counter" id="counter">
        <div className="container">
          <div className="extra_container">
            <div className="counter_in">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="space" />
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/1.png" alt={1} />
                      </div>
                      <div className="title">
                        <span>Front End Developer</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={95}
                            data-speed={1500}
                          >
                            <Counter end={95} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="space"></div>
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/2.png" alt={2} />
                      </div>
                      <div className="title">
                        <span>Development</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={90}
                            data-speed={1500}
                          >
                            <Counter end={90} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="space"></div>
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/3.png" alt={3} />
                      </div>
                      <div className="title">
                        <span>React Native Developer</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={80}
                            data-speed={1500}
                          >
                            <Counter end={80} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="space"></div>
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/4.png" alt={4} />
                      </div>
                      <div className="title">
                        <span>Backend Developer</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={95}
                            data-speed={1500}
                          >
                            <Counter end={95} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Counter */}
      {/* Experience */}
      <div className="nicolas_sm_experience">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span> My experience</span>
            </div>
            <div className="center">
              <p>
                As a Lead Developer at EmployWise, I leverage my expertise in
                full-stack development to create innovative and user-friendly
                solutions for the HR and payroll industry. I work with a team of
                talented engineers to design, develop, and deploy scalable and
                secure applications using Java, React, React Native, Node js and
                MongoDB.
              </p>
            </div>
            <div className="right">
              <Link href="portfolio">(( Projects all ))</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="extra_container">
            <div className="experience_in">
              <div className="list_inner">
                <div className="left">
                  <p>Employwise</p>
                </div>
                <div className="center">
                  <p>Lead Developer</p>
                </div>
                <div className="right">
                  <span>December 2020 - Present</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Clustrex Data Limited</p>
                </div>
                <div className="center">
                  <p>React Native Intern</p>
                </div>
                <div className="right">
                  <span>Sept 2020-December 2020</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Stirring Minds</p>
                </div>
                <div className="center">
                  <p>WordPress &amp; Developer</p>
                </div>
                <div className="right">
                  <span>August 2020 - September 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Experience */}
      {/* Awards */}
      {/* <div className="nicolas_sm_awards">
        <div className="nicolas_sm_extra_title">
          <MarqueeTitle marqueeText="Awwwards" />
        </div>
        <div className="container">
          <div className="extra_container">
            <div className="awards_in">
              <div className="image_box">
                <img className="star" src="img/awards/1.png" alt={1} />
                <img src="img/awards/2.png" alt={2} />
              </div>
              <div className="awards_box">
                <div className="list_inner">
                  <div className="left">
                    <p>Webby Awards</p>
                  </div>
                  <div className="center">
                    <p>Awwwards</p>
                  </div>
                  <div className="right">
                    <span>
                      <img
                        className="sm_svg"
                        src="img/svg/down_arrow.svg"
                        alt={1}
                      />
                    </span>
                  </div>
                </div>
                <div className="list_inner">
                  <div className="left">
                    <p>CSS Design Awards</p>
                  </div>
                  <div className="center">
                    <p>Site of the Day</p>
                  </div>
                  <div className="right">
                    <span>
                      <img
                        className="sm_svg"
                        src="img/svg/down_arrow.svg"
                        alt={1}
                      />
                    </span>
                  </div>
                </div>
                <div className="list_inner">
                  <div className="left">
                    <p>Golden Pixel Awards</p>
                  </div>
                  <div className="center">
                    <p>Awwwards</p>
                  </div>
                  <div className="right">
                    <span>
                      <img
                        className="sm_svg"
                        src="img/svg/down_arrow.svg"
                        alt={1}
                      />
                    </span>
                  </div>
                </div>
                <div className="list_inner">
                  <div className="left">
                    <p>Developer Award</p>
                  </div>
                  <div className="center">
                    <p>TechnoWorld</p>
                  </div>
                  <div className="right">
                    <span>
                      <img
                        className="sm_svg"
                        src="img/svg/down_arrow.svg"
                        alt={1}
                      />
                    </span>
                  </div>
                </div>
                <div className="list_inner">
                  <div className="left">
                    <p>Motion Graphics</p>
                  </div>
                  <div className="center">
                    <p>TechnoWorld</p>
                  </div>
                  <div className="right">
                    <span>
                      <img
                        className="sm_svg"
                        src="img/svg/down_arrow.svg"
                        alt={1}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* /Awards */}
      {/* About_testimonials */}
      {/* <TestimonialSlider sectionNumber="" /> */}
      {/* /About_testimonials */}
      {/* About_partners */}
      {/* <Partners sectionNumber="" /> */}
      {/* About_partners */}
    </NikolasLayout>
  );
};
export default page;
