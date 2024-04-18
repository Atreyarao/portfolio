"use client";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    title: "What technologies or programming languages are you proficient in?",
    content:
      " have expertise in a range of technologies and programming languages, including but not limited to JavaScript (both front-end and back-end frameworks like React and Node.js), HTML/CSS, NoSQL databases, and mobile app development with platforms like React Native.",
  },
  {
    id: 2,
    title: "How do you approach problem-solving and tackling complex projects?",
    content:
      "I believe in a systematic approach to problem-solving, starting with thorough analysis and understanding of the problem domain. I break down complex projects into smaller, manageable tasks and prioritize them based on their impact and dependencies. Collaboration and communication are also key aspects of my approach, as I value teamwork and collective brainstorming to find optimal solutions.",
  },
  {
    id: 3,
    title: "What sets your approach to software development apart from others?",
    content:
      "My approach to software development is characterized by a strong emphasis on user-centric design, robust architecture, and a commitment to delivering high-quality, maintainable code. I prioritize understanding the end-user's needs and preferences, which informs every stage of the development process, from initial concept to final delivery.",
  },
  // {
  //   id: 4,
  //   title: "Are you open for new projects?",
  //   content:
  //     "I am not actively ",
  // },
  // {
  //   id: 5,
  //   title: "Do you currently have career openings?",
  //   content:
  //     "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised open ininwords which don't look even again is there anyone who loves slightly believable.",
  // },
];

const Faq = ({ limit = 10 }) => {
  const [active, setActive] = useState(1);
  const onClick = (value) => setActive(active == value ? null : value);
  return (
    <div className="accordion_wrap ready">
      {faqData.map(
        (item) =>
          item.id <= limit && (
            <div
              className={`accordion ${active === item.id ? "active" : ""}`}
              key={item.id}
            >
              <div
                className="accordion_header"
                onClick={() => onClick(item.id)}
              >
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="arrow">
                  <img
                    className="sm_svg"
                    src="img/svg/down_arrow.svg"
                    alt={1}
                  />
                </div>
              </div>
              <div
                className="accordion_content"
                style={{ display: active == item.id ? "block" : "none" }}
              >
                <p>{item.content}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};
export default Faq;
