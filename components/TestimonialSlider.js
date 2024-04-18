"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";

export default class TestimonialSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <div className="nicolas_sm_section">
        <div className="nicolas_sm_testimonials">
          <div className="container">
            <div className="nicolas_sm_main_title">
              <div className="left">
                <span>
                  {this.props.sectionNumber} // {this.props.title}
                </span>
              </div>
              <div className="center">
                <p>
                  Our happy customers give us impactfull and positive feedback
                  on our services, customer supports &amp; etc.
                </p>
              </div>
              <div className="right">
                <div className="prev_next">
                  <a
                    className="prev "
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.previous();
                    }}
                  >
                    <img className="sm_svg" src="img/svg/arrow.svg" alt={1} />
                  </a>
                  <a
                    className="next "
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.next();
                    }}
                  >
                    <img className="sm_svg" src="img/svg/arrow.svg" alt={2} />
                  </a>
                </div>
              </div>
            </div>
            <div className="testimonials_in">
              <Slider
                ref={(c) => (this.slider = c)}
                {...sliderProps.testimonial}
                className=""
              >
                <div>
                  <div className="list_inner">
                    <div className="details">
                      <img className="sm_svg" src="img/svg/quote.svg" alt={1} />
                      <p>
                        Duis aute irure dolor in velit esse dolore eu fugiat
                        nulla pariatur. excepteur cupidatats non proident, sunt
                        in culpa qui deserunt a mollit anim id est laborum.
                      </p>
                    </div>
                    <div className="info">
                      <div className="image">
                        <img src="img/testimonials/1.jpg" alt={1} />
                      </div>
                      <div className="job">
                        <h3>Jonas Morgan</h3>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="list_inner">
                    <div className="details">
                      <img className="sm_svg" src="img/svg/quote.svg" alt={1} />
                      <p>
                        Duis aute irure dolor in velit esse dolore eu fugiat
                        nulla pariatur. excepteur cupidatats non proident, sunt
                        in culpa qui deserunt a mollit anim id est laborum.
                      </p>
                    </div>
                    <div className="info">
                      <div className="image">
                        <img src="img/testimonials/2.jpg" alt={2} />
                      </div>
                      <div className="job">
                        <h3>Nicolas Jhon</h3>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="list_inner">
                    <div className="details">
                      <img className="sm_svg" src="img/svg/quote.svg" alt={1} />
                      <p>
                        Duis aute irure dolor in velit esse dolore eu fugiat
                        nulla pariatur. excepteur cupidatats non proident, sunt
                        in culpa qui deserunt a mollit anim id est laborum.
                      </p>
                    </div>
                    <div className="info">
                      <div className="image">
                        <img src="img/testimonials/3.jpg" alt={3} />
                      </div>
                      <div className="job">
                        <h3>Jhonson Smith</h3>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="list_inner">
                    <div className="details">
                      <img className="sm_svg" src="img/svg/quote.svg" alt={1} />
                      <p>
                        Duis aute irure dolor in velit esse dolore eu fugiat
                        nulla pariatur. excepteur cupidatats non proident, sunt
                        in culpa qui deserunt a mollit anim id est laborum.
                      </p>
                    </div>
                    <div className="info">
                      <div className="image">
                        <img src="img/testimonials/1.jpg" alt={1} />
                      </div>
                      <div className="job">
                        <h3>Jonas Morgan</h3>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="list_inner">
                    <div className="details">
                      <img className="sm_svg" src="img/svg/quote.svg" alt={1} />
                      <p>
                        Duis aute irure dolor in velit esse dolore eu fugiat
                        nulla pariatur. excepteur cupidatats non proident, sunt
                        in culpa qui deserunt a mollit anim id est laborum.
                      </p>
                    </div>
                    <div className="info">
                      <div className="image">
                        <img src="img/testimonials/2.jpg" alt={2} />
                      </div>
                      <div className="job">
                        <h3>Nicolas Jhon</h3>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="list_inner">
                    <div className="details">
                      <img className="sm_svg" src="img/svg/quote.svg" alt={1} />
                      <p>
                        Duis aute irure dolor in velit esse dolore eu fugiat
                        nulla pariatur. excepteur cupidatats non proident, sunt
                        in culpa qui deserunt a mollit anim id est laborum.
                      </p>
                    </div>
                    <div className="info">
                      <div className="image">
                        <img src="img/testimonials/3.jpg" alt={3} />
                      </div>
                      <div className="job">
                        <h3>Jhonson Smith</h3>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TestimonialSlider.defaultProps = {
  title: "Satisfied clients",
  sectionNumber: "06",
};
