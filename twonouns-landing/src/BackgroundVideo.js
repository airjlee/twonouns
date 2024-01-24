import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <ReactPlayer
        url="/path/to/your/video.mp4" // Update with the actual path to your video file
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
