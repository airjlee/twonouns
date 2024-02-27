import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css';

const BackgroundVideo = () => {

  /*
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
*/
  
  
  return (
  
    <><div class="youtube-container">
      <iframe src="https://www.youtube.com/embed/5WCpGEnv9po?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=5WCpGEnv9po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div></>
  );
};

export default BackgroundVideo;
