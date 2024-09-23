import React from 'react';
import ReviewItem from '../molecules/ReviewItem';
import './ReviewList.scss';

const ReviewList = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review, index) => (
      <ReviewItem key={index} review={review} />
    ))}
  </div>
);

export default ReviewList;
