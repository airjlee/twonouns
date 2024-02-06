import React, { useState } from 'react';
import Modal from 'react-modal';
import './WaitlistButton.css';


const WaitlistButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            {/* Email input box */}
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="email-input"
            />
    <button onClick={handleCloseModal}>STAY UPDATED</button>
  </div>
      </Modal>
    </div>
  );
};

export default WaitlistButton;
