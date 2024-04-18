"use client";
import NikolasLayout from "@/layouts/NikolasLayout";
import { useSearchParams } from "next/navigation";
import data from "./data";

const page = () => {
  const searchParams = useSearchParams();

  let id = searchParams.get("id");
  if (id) {
    id = parseInt(id);
    if (id < 1 || id > 6) return <></>;
  }
  const {
    title,
    mainImg,
    subHeading,
    content,
    subHeading2,
    content2,
    projectFor,
    techStack,
    category,
    link,
    images,
    mainVideo,
  } = data[id] || { content: [] };
  return (
    <NikolasLayout>
      <div className="nicolas_sm_portfolio_single">
        <div className="nicolas_sm_service_details">
          <div className="nicolas_sm_page_title">
            <div className="container">
              <div className="nicolas_sm_breadcrumbs">
                <span>
                  <a href="#">Home</a>
                </span>
                <span>{title}</span>
              </div>
              <div className="page_title_in">
                <h3></h3>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="extra_container">
              <div className="service_details_in">
                <div className="image anchor">
                  <a href="#text">
                    <img
                      className="sm_svg"
                      src="img/svg/down_arrow.svg"
                      alt={1}
                    />
                  </a>
                  {mainVideo ? (
                    <video src={mainVideo} controls />
                  ) : (
                    <img src={mainImg} alt={8} />
                  )}
                </div>
                <div className="single_list">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <h3>Project For:</h3>
                        <p>{projectFor}</p>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>Category:</h3>
                        <p>{category}</p>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>Tech Stack:</h3>
                        <p>{techStack}</p>
                      </div>
                    </li>
                    {/* <li>
                      <div className="list_inner">
                        <h3>Location:</h3>
                        <p>Brooklyn, New York</p>
                      </div>
                    </li> */}
                    <li>
                      <div className="list_inner">
                        <h3>Link:</h3>
                        <div className="button">
                          <a target="__blank" href={link}>
                            Open
                          </a>
                        </div>
                        {/* <ul>
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
                        </ul> */}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="text" id="text">
                  <h3>{subHeading}</h3>
                  <p>{content[0]?.string}</p>
                </div>
                <div className="list">
                  <ul>
                    {content[1]?.points?.map((ele, index) => (
                      <li key={`points-${index}`}>
                        <div className="list_inner">
                          <p>{ele}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="main_text">
                  <p>{content[2]?.string}</p>
                </div>
                <div className="text bottom">
                  <h3>{subHeading2}</h3>
                  <p>{content2}</p>
                </div>
                <div className="images">
                  <ul>
                    {images?.map((ele, index) => (
                      <li key={`image-${index}`}>
                        <div className="list_inner">
                          <img src={ele} alt={`image-${index}`} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="prev_next">
                  <div className="prev">
                    <a href="#">
                      <img
                        className="sm_svg"
                        src="img/svg/arrow_left.svg"
                        alt={1}
                      />{" "}
                      Previous
                    </a>
                  </div>
                  <div className="next">
                    <a href="#">
                      Next{" "}
                      <img
                        className="sm_svg"
                        src="img/svg/arrow_left.svg"
                        alt={1}
                      />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NikolasLayout>
  );
};
export default page;
