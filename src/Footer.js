import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="email-container">
        <input type="email" placeholder="Enter your email" />
      </div>
      <div className="footer-header">
            TWONOUNS | 2024 ©
      </div>
 
    </footer>
  );
};

export default Footer;