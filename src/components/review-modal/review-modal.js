import React from 'react';

import './review-modal.css'

const ReviewModal = ({ review, hideModal }) => {
  const { name, email, text } = review
  return (
    <div className="fixed-overlay fixed-overlay__modal">
      <div className="review-modal modal">
        <div className="modal-container">
          <h2>Спасибо {name} за ваш отзыв</h2>
          <h3>E-mail: {email}</h3>
          <h3>Отзыв</h3>
          <p>{text}</p>
          <button type="button" onClick={hideModal}>x</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
