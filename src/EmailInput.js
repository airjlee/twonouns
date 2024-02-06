import React from 'react';
import './EmailInput.css';
import './WaitlistButton.css'

const EmailInput = () => {
  return (
    <div className="email-input-container">
      <input type="email" placeholder="EMAIL ADDRESS" className="email-input" />
    </div>
  );
};

export default EmailInput;
