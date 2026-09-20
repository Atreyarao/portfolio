"use client";
import { useState } from "react";

// Click-to-play embed: nothing is requested from YouTube until the visitor presses play,
// which keeps the page fast and avoids third-party cookies on load.
const YouTubeFacade = ({ id, title }) => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="video_facade">
        <iframe
          src={"https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0"}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="video_facade">
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={"Play video: " + title}
      >
        <img
          src={"https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"}
          alt=""
          loading="lazy"
        />
        <span className="play" aria-hidden="true" />
      </button>
    </div>
  );
};
export default YouTubeFacade;
