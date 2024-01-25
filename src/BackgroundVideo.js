import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  
  return (
    <div className="background-video-container">
      <ReactPlayer
        url='https://vimeo.com/906269757'
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
