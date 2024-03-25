import React from 'react';
import './Title.css';
import { useRef, useEffect, useState } from 'react';

import 'animate.css';

const Title = () => {
  const emailRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: '-500px 0px 0px 0px', } 
    );

    if (emailRef.current) {
      observer.observe(emailRef.current);
    }


    return () => {
      if (emailRef.current) {
        observer.unobserve(emailRef.current);
      }
    };
  }, []);

  return (
    <div className='animate__animated animate__fadeIn'>
        <div className="title-container">
      <h1 className={

        `${isMobile ? `${isValidEmail ? 'mobile-title' : 'mobile-up'}` : `${isValidEmail ? 'title' : 'up'}`} `
        
        }>TWONOUNS</h1>
      <h2 className="subtitle">DESIGN STUDIO</h2>
      <h3 className="korean">옷이 날개다</h3>
      </div>
      <div className="email-container">
        
        <div className='footer-container'>
      {isJoined ? (
        <text className="thanks">Thank you for joining the waitlist.</text>
      ) : (
        <div>
          <div className={`${isMobile ? 'footer-subtitle-mobile' : 'footer-subtitle'}`} >JOIN THE WAITLIST</div>
          <input type="email"
                 placeholder="EMAIL ADDRESS"
                 value={email}
                 onChange={handleEmailChange}
                 onKeyPress={handleKeyPress}
           />
          {!isValidEmail && <text className="invalid-email-msg">Please enter a valid email address.</text>}
        </div>
      )}
      
      <div className="footer">© 2024 TWONOUNS | <a href="mailto:jordanlee@twonouns.com">CONTACT</a> | <a href="https://www.instagram.com/twonouns" target="_blank" rel="noopener noreferrer">SOCIAL</a></div>
      </div>
    </div>
    </div>
    
  );
};

export default Title;
