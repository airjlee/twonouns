import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  const [showFirstText, setShowFirstText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowFirstText(false);
      setShowSecondText(true);
    }, 1250); // Adjust the delay for the first text (2000ms = 2 seconds)

    const secondTimer = setTimeout(() => {
      setShowSecondText(false);
    }, 2500); // Adjust the delay for the second text (3000ms after the first text = 5 seconds)

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        {showFirstText && <text>옷이 날개다</text>}
        {showSecondText && <text>WEAR YOUR WINGS</text>}
      </div>
    </div>
  );
};

export default SplashScreen;