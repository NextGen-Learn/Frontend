import React from 'react';
import ReviewStar from '../atoms/ReviewStar'; // Убедитесь, что компонент принимает filled пропс
import './ReviewSection.scss';

const ReviewSection = ({ reviews }) => {
  return (
    <div className="review-section">
      <h2>Отзывы</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="review-rectangle">
            {review.text}
          </div>
          <div className="content">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <ReviewStar key={i} filled={i < review.rating} />
              ))}
            </div>
            <p className="author">— {review.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
