import React from 'react';
import './ReviewItem.scss';

const ReviewItem = ({ review }) => (
  <div className="review-item">
    <div className="review-header">
      <span className="review-date">{review.date}</span>
      <span className="review-subject">{review.subject}</span>
    </div>
    <div className="review-text">
      {review.text}
    </div>
  </div>
);

export default ReviewItem;
