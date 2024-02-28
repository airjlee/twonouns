import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css';

const BackgroundVideo = () => {

  
  const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed

  if (isMobile) {
    return (
      <><div class="youtube-container-mobile">
      <iframe src="https://www.youtube.com/embed/CV2P-xsEiYE?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&start=25&playlist=CV2P-xsEiYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div></>
    );
  }

  
  
  return (
  
    <><div class="youtube-container">
      <iframe src="https://www.youtube.com/embed/CV2P-xsEiYE?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&start=50&playlist=CV2P-xsEiYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div></>
  );
};

export default BackgroundVideo;
