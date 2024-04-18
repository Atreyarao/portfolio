import Link from "next/link";

const Pricing = () => {
  return (
    <div className="nicolas_sm_section">
      <div className="nicolas_sm_pricing">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>07 // Pricing plan</span>
            </div>
            <div className="center">
              <p>
                Your pricing page is a prime opportunity to take control of the
                price conversation and make it even easier for people to buy.
              </p>
            </div>
            <div className="right">
              <Link href="service">(( Service all ))</Link>
            </div>
          </div>
          <div className="extra_container">
            <div className="pricing_in">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="info_box">
                      <div className="info">
                        <h3 className="plan">Basic Plan</h3>
                        <h3 className="price">
                          $25<span>/ month</span>
                        </h3>
                        <p>10% taxes will include after make price</p>
                      </div>
                      <div className="features">
                        <ul>
                          <li>
                            <span />
                            <p>Web Development</p>
                          </li>
                          <li>
                            <span />
                            <p>Mobile Development</p>
                          </li>
                          <li>
                            <span />
                            <p>Advetising</p>
                          </li>
                          <li>
                            <span />
                            <p>Graphic design</p>
                          </li>
                          <li>
                            <span />
                            <p>Project management</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <span>Start My Project Now</span>
                      <span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </span>
                      <a className="nicolas_sm_full_link" href="#" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="info_box">
                      <div className="info">
                        <h3 className="plan">Standart</h3>
                        <h3 className="price">
                          $75<span>/ month</span>
                        </h3>
                        <p>10% taxes will include after make price</p>
                      </div>
                      <div className="features">
                        <ul>
                          <li>
                            <span />
                            <p>Web Development</p>
                          </li>
                          <li>
                            <span />
                            <p>Mobile Development</p>
                          </li>
                          <li>
                            <span />
                            <p>Advetising</p>
                          </li>
                          <li>
                            <span />
                            <p>Graphic design</p>
                          </li>
                          <li>
                            <span />
                            <p>Project management</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <span>Start My Project Now</span>
                      <span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </span>
                      <a className="nicolas_sm_full_link" href="#" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="info_box">
                      <div className="info">
                        <h3 className="plan">Gold Plan</h3>
                        <h3 className="price">
                          $125<span>/ month</span>
                        </h3>
                        <p>10% taxes will include after make price</p>
                      </div>
                      <div className="features">
                        <ul>
                          <li>
                            <span />
                            <p>Web Development</p>
                          </li>
                          <li>
                            <span />
                            <p>Mobile Development</p>
                          </li>
                          <li>
                            <span />
                            <p>Advetising</p>
                          </li>
                          <li>
                            <span />
                            <p>Graphic design</p>
                          </li>
                          <li>
                            <span />
                            <p>Project management</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <span>Start My Project Now</span>
                      <span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </span>
                      <a className="nicolas_sm_full_link" href="#" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
