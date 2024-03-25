import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const TempSplash = () => {
  const [showFirstText, setShowFirstText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowFirstText(false);
      setShowSecondText(true);
    }, 1500); // Adjust the delay for the first text (2000ms = 2 seconds)

    const secondTimer = setTimeout(() => {
      setShowSecondText(false);
    }, 3000); // Adjust the delay for the second text (3000ms after the first text = 5 seconds)

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        {showFirstText && <text></text>}
        {showSecondText && <text></text>}
      </div>
    </div>
  );
};

export default TempSplash;