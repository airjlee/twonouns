import React from "react";
import YouTube from "react-youtube";
import './BackgroundVideo.css';

const YoutubePlayer = () => {
  // YOUTUBE VIDEO FUNCTION
  const opts = {
    playerVars: { autoplay: 1 },
  };
  const videoReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <>
      <div>
        <div
          className="youtube-player"
        >
          <YouTube
            videoId="CV2P-xsEiYE"
            opts={opts}
            onReady={videoReady}
          />
        </div>
      </div>
    </>
  );
};

export default YoutubePlayer;