"use client";
import Marquee from "react-fast-marquee";

const MarqueeTitle = ({ marqueeText = "News", length = 8 }) => {
  const createArrayWithIndex = (length) => {
    let newArray = [];
    for (let i = 0; i < length; i++) {
      newArray.push(i);
    }
    return newArray;
  };
  return (
    <Marquee className="title marquee">
      <div className="wrap">
        {createArrayWithIndex(length).map((text, i) => (
          <div key={i}>
            <h3 className={i % 2 !== 1 ? "stroke_text_bolder" : ""}>
              {marqueeText}
            </h3>
          </div>
        ))}
      </div>
    </Marquee>
  );
};
export default MarqueeTitle;
