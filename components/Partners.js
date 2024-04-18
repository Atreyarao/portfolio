import Link from "next/link";
import Marquee from "react-fast-marquee";

const Partners = ({ title = "Customers", sectionNumber = "06" }) => {
  return (
    <div className="nicolas_sm_section">
      <div className="nicolas_sm_partners">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>
                {sectionNumber} // {title}
              </span>
            </div>
            <div className="center">
              <p>
                My journey began with a fascination for the digital world to
                make it more beautiful and accessible. With a degree in
                Interaction Design and over a decade of experience,
              </p>
            </div>
            <div className="right">
              <Link href="contact">(( Contact me ))</Link>
            </div>
          </div>
          <div className="line">
            <div className="extra_container">
              <Marquee className="partners_in marquee">
                <div className="wrap">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <img src="img/partners/amazon.png" alt={1} />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <img src="img/partners/slack.png" alt={2} />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <img src="img/partners/google.png" alt={3} />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <img src="img/partners/linkedin.png" alt={4} />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <img src="img/partners/walmart.png" alt={5} />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <img src="img/partners/amazon.png" alt={1} />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <img src="img/partners/slack.png" alt={2} />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <img src="img/partners/google.png" alt={3} />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <img src="img/partners/linkedin.png" alt={4} />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <img src="img/partners/walmart.png" alt={5} />
                      </div>
                    </li>
                  </ul>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
