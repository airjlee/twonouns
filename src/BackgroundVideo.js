import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=4j_qzYZGQig';
  const startTimeInSeconds = 48; // Set the desired start time in seconds

  return (
    <div className="background-video-container">
      <ReactPlayer
        url={`${videoUrl}?start=${startTimeInSeconds}`}
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="background-video"
      />
    </div>
  );
};

export default BackgroundVideo;
