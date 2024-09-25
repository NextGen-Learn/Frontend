import React from 'react';
import ReviewStar from '../atoms/ReviewStar';
import './ReviewSection.scss';

const ReviewSection = ({ reviews }) => {
  return (
    <div className="review-section">
      <h2>Отзывы</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p>{review.text}</p>
          <div className="rating">
            {[...Array(review.rating)].map((_, i) => (
              <ReviewStar key={i} />
            ))}
          </div>
          <p className="author">— {review.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
