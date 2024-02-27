import React, { useRef, useEffect, useState } from 'react';
import './Footer.css';
import 'animate.css';

const Footer = () => {
  const emailRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
        <div className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`} ref={emailRef}>
            <div className="footer-subtitle">JOIN THE WAITLIST</div>
          <input type="email" placeholder="Enter your email" />
        </div>
      </div>
      <div className="footer-header">
        TWONOUNS | 2024 ©
      </div>
    </footer>
  );
};

export default Footer;
