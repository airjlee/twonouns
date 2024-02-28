import React, { useRef, useEffect, useState } from 'react';
import './Footer.css';
import 'animate.css';

const Footer = () => {
  const emailRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isJoined, setIsJoined] = useState(false); // State to track if user has joined
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track if email is valid

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
      { threshold: 0.5 } 
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
    <footer className="footer">
      <div className="email-container">
      {isJoined ? (
            <text className="thanks">Thank you for joining the waitlist.</text>
          ) : (
        <div className={`${isVisible ? 'animate__animated animate__fadeIn' : 'black'}`} ref={emailRef}>
          <div className="footer-subtitle">JOIN THE WAITLIST</div>
          <input type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                onKeyPress={handleKeyPress}
           />
          {!isValidEmail && <text className="invalid-email-msg">Please enter a valid email address.</text>}
        </div>
          )}
      </div>
      <div className='bottom'>
        <div className="footer-header">
          TWONOUNS | 2024 ©
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
