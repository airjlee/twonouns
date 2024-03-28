import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);


  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='collection'>
      <div className='left'>SUMMER SPRING 24 </div>
      <div className='center'>7.17.2024 </div>
       <div className='right'>WEAR YOUR WINGS</div>
     
      
    </div>
  );
};

export default Header;
