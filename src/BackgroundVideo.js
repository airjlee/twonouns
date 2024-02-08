import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  
  return (
    <div className="background-video-container">
      <ReactPlayer
        url='https://vimeo.com/907160841'
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="background-video"
        config={{
          vimeo: {
            playerOptions: {
              autopause: 0,
              byline: 0,
              portrait: 0,
              title: 0,
              controls: 0
            }
          }
        }}
      />
    </div>
  );
};

export default BackgroundVideo;
