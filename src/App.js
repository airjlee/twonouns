import React, { useState, useEffect } from 'react';
import Title from './Title';
import BackgroundVideo from './BackgroundVideo';
import './App.css';
import YoutubePlayer from './YoutubePlayer';
import SplashScreen from './SplashScreen';
import "animate.css";
import TempSplash from './temp_splash';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Change the timeout duration (3000ms = 3 seconds) as needed

    return () => clearTimeout(timer);
  }, []);

  

  return showSplash ? (
      <SplashScreen />
  ) : (
    <div className="App">
      <div className='animate__animated animate__fadeOut'>
       <TempSplash />
    </div>
      <Title />
    </div>
  );
}

export default App;
