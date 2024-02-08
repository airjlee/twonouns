import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css';

const BackgroundVideo = () => {

  const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed

  if (isMobile) {
    return (
      <div >
        <img
          src={require('./bloodlilyimg.png')}
          alt="Background"
          className="background-image"
        />
      </div>
    );
  }

  
  
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
              controls: 0,
              keyboard: false
            }
          }
        }}
      />
    </div>
  );
};

export default BackgroundVideo;
