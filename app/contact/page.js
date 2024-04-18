import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { Copyright2 } from "@/layouts/Copyright";
import NikolasLayout from "@/layouts/NikolasLayout";
const page = () => {
  return (
    <NikolasLayout noFooter>
      <div className="nicolas_sm_contact">
        <div className="nicolas_sm_page_title">
          <div className="container">
            <div className="nicolas_sm_breadcrumbs">
              <span>
                <a href="#">Home</a>
              </span>
              <span>Contact me</span>
            </div>
            <div className="page_title_in">
              {/* <h3>Find main the best suites</h3> */}
            </div>
          </div>
        </div>
        <div className="nicolas_sm_footer">
          <div className="container">
            <div className="extra_container">
              <div className="footer_in">
                <div className="arrow_button anchor">
                  <a href="#question">
                    <img
                      className="sm_svg"
                      src="img/svg/down_arrow.svg"
                      alt={1}
                    />
                  </a>
                </div>
                <div className="left">
                  <div className="title">
                    <h3>Contact information</h3>
                  </div>
                  <div className="contact">
                    <ul>
                      <li>
                        <span>Stay up to date</span>
                        <a href="#">(+91) 7095317965</a>
                        <a href="#">atreyarao70@gmail.com</a>
                      </li>
                      <li>
                        {/* <span>Address</span>
                        <p>223 Thatcher Road St, Brooklyn,</p>
                        <p>Manhattan, NY 10463</p> */}
                      </li>
                    </ul>
                  </div>
                  <div className="social_button">
                    <ul>
                      {/* <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li> */}
                      <li>
                        <a
                          target="__blank"
                          href="https://www.linkedin.com/in/atreya-rao-ba7a47168/"
                        >
                          Linkedin
                        </a>
                      </li>
                      <li>
                        <a target="__blank" href="https://wa.me/7095317965">
                          Whatsapp
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">Dribbble</a>
                      </li>
                      <li>
                        <a href="#">Behance</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="right">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="maps">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width={1920}
                height={603}
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9051078661!2d78.24323916487947!3d17.412608633461044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713449543959!5m2!1sen!2sin"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
              <a href="https://embedgooglemap.net/124/">123movies</a>
              <br />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{text-align:right;height:603px;width:100%;}",
                }}
              />
              <a href="https://www.embedgooglemap.net" />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".gmap_canvas {overflow:hidden;background:none!important;height:603px;width:1920px;}",
                }}
              />
            </div>
          </div>
        </div>
        <div className="nicolas_sm_question" id="question">
          <div className="container">
            <div className="extra_container">
              <div className="question_in">
                <div className="main_title">
                  <h3>Have any questions?</h3>
                </div>
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright2 />
    </NikolasLayout>
  );
};
export default page;
