import React from 'react';
import './Title.css';
import { useEffect, useState } from 'react';
import 'animate.css';
import WebFont from 'webfontloader';
import BloodLily from './blood_lily.png';
import DaisyBloom from './blood_lily_better.png'
import DoveWings from './dove_Wings.png'

const Title = () => {
  useEffect(() => {
    WebFont.load({
      custom: {
        families: ['TSB', 'HL', 'HLB'],
        urls: ['./Title.css']
      },
    });
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isJoined, setIsJoined] = useState(false); // State to track if user has joined
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track if email is valid
  
  const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Clear the error message when user starts typing
    setIsValidEmail(true);
  };

  const handleStayUpdated = () => {
    // Validate email
    setIsValidEmail(validateEmail(email));
    if (validateEmail(email)) {
      setIsJoined(true); // Update state to indicate user has joined
      
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleStayUpdated();
    }
  };

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

  const calculateOpacity = () => {
    const maxScroll = 700; // Adjust as needed
    const opacity = 1 - (scrollPosition / maxScroll);
    return opacity < 0 ? 0 : opacity;
  };

  const calculateOpacityTwo = () => {
    const fadeInStart = 800;
    const fadeInEnd = 1500;
    const fadeOutStart = 1500;
    const fadeOutEnd = 2200;
  
    if (scrollPosition < fadeInStart) {
      return 0; // Opacity is 0 before the fadeInStart
    } else if (scrollPosition >= fadeInStart && scrollPosition < fadeInEnd) {
      // Opacity increases linearly from 0 to 1 between fadeInStart and fadeInEnd
      return (scrollPosition - fadeInStart) / (fadeInEnd - fadeInStart);
    } else if (scrollPosition >= fadeInEnd && scrollPosition < fadeOutStart) {
      return 1; // Opacity is 1 between fadeInEnd and fadeOutStart
    } else if (scrollPosition >= fadeOutStart && scrollPosition < fadeOutEnd) {
      // Opacity decreases linearly from 1 to 0 between fadeOutStart and fadeOutEnd
      return 1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    } else {
      return 0; // Opacity is 0 after fadeOutEnd
    }
  };

  const calculateOpacityThree = () => {
    const fadeInStart = 2300;
    const fadeInEnd = 3000;
    const fadeOutStart = 3000;
    const fadeOutEnd = 3700;
  
    if (scrollPosition < fadeInStart) {
      return 0; // Opacity is 0 before the fadeInStart
    } else if (scrollPosition >= fadeInStart && scrollPosition < fadeInEnd) {
      // Opacity increases linearly from 0 to 1 between fadeInStart and fadeInEnd
      return (scrollPosition - fadeInStart) / (fadeInEnd - fadeInStart);
    } else if (scrollPosition >= fadeInEnd && scrollPosition < fadeOutStart) {
      return 1; // Opacity is 1 between fadeInEnd and fadeOutStart
    } else if (scrollPosition >= fadeOutStart && scrollPosition < fadeOutEnd) {
      // Opacity decreases linearly from 1 to 0 between fadeOutStart and fadeOutEnd
      return 1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    } else {
      return 0; // Opacity is 0 after fadeOutEnd
    }
  };

  const calculateOpacityFour = () => {
    const fadeInStart = 3800;
    const fadeInEnd = 4500;
    const fadeOutStart = 4500;
    const fadeOutEnd = 5200;
  
    if (scrollPosition < fadeInStart) {
      return 0; // Opacity is 0 before the fadeInStart
    } else if (scrollPosition >= fadeInStart && scrollPosition < fadeInEnd) {
      // Opacity increases linearly from 0 to 1 between fadeInStart and fadeInEnd
      return (scrollPosition - fadeInStart) / (fadeInEnd - fadeInStart);
    } else if (scrollPosition >= fadeInEnd && scrollPosition < fadeOutStart) {
      return 1; // Opacity is 1 between fadeInEnd and fadeOutStart
    } else if (scrollPosition >= fadeOutStart && scrollPosition < fadeOutEnd) {
      // Opacity decreases linearly from 1 to 0 between fadeOutStart and fadeOutEnd
      return 1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    } else {
      return 0; // Opacity is 0 after fadeOutEnd
    }
  };

  return (
    <div className='animate__animated animate__fadeIn'>
       {scrollPosition < 800 && (
      <div className="title-container" style={{ opacity: calculateOpacity() }} >
      <h1 className={

        `${isMobile ? `${isValidEmail ? 'mobile-title' : 'mobile-title'}` : `${isValidEmail ? 'title' : 'title'}`} `
        
        }>TWONOUNS</h1>
      <h2 className="subtitle">DESIGN STUDIO</h2>
      <h3 className="korean">옷이 날개다</h3>
      </div>
       )}

       {scrollPosition > 799 &&(
         <div className="title-container" style={{ opacity: calculateOpacityTwo() }} >
          <img src={DoveWings}/>
            <h2 className="label">01 / DOVE WINGS</h2>
            
         </div>
       )}

        
         <div className="title-container" style={{ opacity: calculateOpacityThree() }} >
            <img className="prev" src={DaisyBloom}/>
            <h2 className="label">02 / DAISY BLOOM</h2>
         </div>
       

         <div className="title-container" style={{ opacity: calculateOpacityFour() }} >
         <img src={BloodLily}/>
            <h2 className="label">03 / BLOOD LILY</h2>
         </div>

      <div className="email-container">
        
        <div className='footer-container'>
      {isJoined ? (
        <div className="email-container">
        <text className="thanks">THANK YOU FOR JOINING THE WAITLIST</text>
        </div>
      ) : (
        <div>
          <div className={`${isMobile ? 'footer-subtitle-mobile' : 'footer-subtitle'}`}>JOIN THE WAITLIST</div>
          <input type="email"
                 placeholder="EMAIL ADDRESS"
                 value={email}
                 onChange={handleEmailChange}
                 onKeyPress={handleKeyPress}
           />
          {!isValidEmail && <text className={`${isMobile ? 'invalid-email-msg-mobile' : 'invalid-email-msg'}`}>PLEASE ENTER A VALID EMAIL ADDRESS</text>}
        </div>
      )}
      
      <div className="footer">© 2024 TWONOUNS | <a href="mailto:jordanlee@twonouns.com">CONTACT</a> | <a href="https://www.instagram.com/twonouns" target="_blank" rel="noopener noreferrer">SOCIAL</a></div>
      </div>
    </div>
    </div>
    
  );
};

export default Title;
