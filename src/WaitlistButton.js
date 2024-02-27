import React, { useState } from 'react';
import Modal from 'react-modal';
import './WaitlistButton.css';

const WaitlistButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJoined, setIsJoined] = useState(false); // State to track if user has joined
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track if email is valid

  const handleJoinWaitlist = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // If user has joined the waitlist, don't close modal
    if (!isJoined) {
      setIsModalOpen(false);
    }
  };

  const handleStayUpdated = () => {
    // Validate email
    setIsValidEmail(validateEmail(email));
    if (validateEmail(email)) {
      setIsJoined(true); // Update state to indicate user has joined
    }
  };

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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleStayUpdated();
    }
  };

  return (
    <div className="waitlist-button">
      <button className="waitlist-text" onClick={handleJoinWaitlist}>
        JOIN WAITLIST
      </button >
      <Modal
        style={{
          overlay : {
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          }

        }
         
        }
        className="modal"
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Join Waitlist Modal"
      >
        <h2>TWONOUNS</h2>
        <p>옷이 날개다</p>
        <div className="modal-content">
    
          {isJoined ? (
            <text className="thanks">Thank you for joining the waitlist.</text>
          ) : (
            // Otherwise, display email input and stay updated button
            <>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className={`email-input ${isValidEmail ? '' : 'invalid'}`}
                value={email}
                onChange={handleEmailChange}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleStayUpdated}>STAY UPDATED</button>
              {!isValidEmail && <text className="invalid-email-msg">Please enter a valid email address.</text>}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default WaitlistButton;
