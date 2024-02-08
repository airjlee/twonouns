import React, { useState } from 'react';
import Modal from 'react-modal';
import './WaitlistButton.css';


const WaitlistButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJoined, setIsJoined] = useState(false); // State to track if user has joined

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
    setIsJoined(true); // Update state to indicate user has joined
  };

  return (
    <div className="waitlist-button">
      <button className="waitlist-text" onClick={handleJoinWaitlist}>
        JOIN WAITLIST
      </button >
      <Modal
        className="modal"
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Join Waitlist Modal"
      >
        <h2>TWONOUNS</h2>
        <p>옷이 날개다</p>
        <div className="modal-content">
          {/* If user has joined, display thank you message */}
          {isJoined ? (
            <text className="thanks">Thank you for joining the waitlist.</text>
          ) : (
            // Otherwise, display email input and stay updated button
            <>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="email-input"
              />
              <button onClick={handleStayUpdated}>STAY UPDATED</button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default WaitlistButton;
