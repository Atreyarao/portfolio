import YouTubeFacade from "@/components/YouTubeFacade";
import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
import { projectHref } from "./projects";

const PortfolioSingle = ({ project, prev, next }) => {
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
    imageAlts,
    stats,
    sections,
    video,
    mainVideo,
  } = project;

  return (
    <NikolasLayout>
      <div className="nicolas_sm_portfolio_single">
        <div className="nicolas_sm_service_details">
          <div className="nicolas_sm_page_title">
            <div className="container">
              <nav className="nicolas_sm_breadcrumbs" aria-label="Breadcrumb">
                <span>
                  <Link href="/">Home</Link>
                </span>
                <span>
                  <Link href="/portfolio">Portfolio</Link>
                </span>
                <span>{title}</span>
              </nav>
              <div className="page_title_in">
                <h1 className="project_title">{title}</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="extra_container">
              <div className="service_details_in">
                <div className="image anchor">
                  <a href="#text" aria-label="Scroll to project details">
                    <img
                      className="sm_svg"
                      src="/img/svg/down_arrow.svg"
                      alt=""
                    />
                  </a>
                  {mainVideo ? (
                    <video
                      width={"100%"}
                      style={{ objectFit: "cover", transform: "scale(0.8)" }}
                      src={mainVideo}
                      controls
                    />
                  ) : (
                    <img src={mainImg} alt={title + " screenshot"} />
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
                    <li>
                      <div className="list_inner">
                        <h3>Link:</h3>
                        <div className="button">
                          <a
                            target="_blank"
                            rel="noopener"
                            href={link}
                            aria-label={"Open " + title + " in a new tab"}
                          >
                            Open
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {stats && (
                  <div className="post_stats project_stats">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="text" id="text">
                  <h2>{subHeading}</h2>
                  <p>{content[0]?.string}</p>
                </div>
                <div className="list">
                  <ul>
                    {content[1]?.points?.map((ele, index) => (
                      <li key={"points-" + index}>
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
                {sections?.map((section) => (
                  <div className="project_section" key={section.heading}>
                    <div className="text">
                      <h2>{section.heading}</h2>
                      {section.paragraphs?.map((paragraph, index) => (
                        <p key={"p-" + index}>{paragraph}</p>
                      ))}
                    </div>
                    {section.points && (
                      <div className="list">
                        <ul>
                          {section.points.map((point, index) => (
                            <li key={"pt-" + index}>
                              <div className="list_inner">
                                <p>{point}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
                {video && (
                  <div className="project_section project_video">
                    <div className="text">
                      <h2>{video.heading}</h2>
                      <p>{video.intro}</p>
                    </div>
                    <YouTubeFacade id={video.youtubeId} title={video.title} />
                    <p className="video_credit">
                      Video: “{video.title}” by{" "}
                      <a
                        href={video.creditUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {video.credit}
                      </a>
                      , via{" "}
                      <a
                        href={"https://www.youtube.com/watch?v=" + video.youtubeId}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                      . Not affiliated with Ode to Paris.
                    </p>
                  </div>
                )}
                {subHeading2 && (
                  <div className="text bottom">
                    <h2>{subHeading2}</h2>
                    <p>{content2}</p>
                  </div>
                )}
                <div className="images">
                  <ul>
                    {images?.map((ele, index) => (
                      <li key={"image-" + index}>
                        <div className="list_inner">
                          <img
                            src={ele}
                            alt={
                              imageAlts?.[index] ||
                              title + " screenshot " + (index + 1)
                            }
                            loading="lazy"
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <nav className="project_nav" aria-label="More projects">
                  <Link className="prev" href={projectHref(prev.slug)}>
                    <span>← Previous project</span>
                    {prev.title}
                  </Link>
                  <Link className="next" href={projectHref(next.slug)}>
                    <span>Next project →</span>
                    {next.title}
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NikolasLayout>
  );
};
export default PortfolioSingle;
