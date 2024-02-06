// WaitlistButton.js

import React, { useState } from 'react';
import Modal from 'react-modal';
import './WaitlistButton.css';
import EmailInput from './EmailInput';

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
      </button>
      <Modal
        className="modal"
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Join Waitlist Modal"
      >
        <h2>TWONOUNS</h2>
        <p>옷이 날개다</p>
        <div className="modal-buttons">
          <EmailInput className="modal-buttons" />
          <button onClick={handleCloseModal}>STAY UPDATED</button>
        </div>
      </Modal>
    </div>
  );
};

export default WaitlistButton;
