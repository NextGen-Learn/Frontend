import React from 'react';
import RatingStar from '../atoms/RatingStar';
import './RatingBar.scss';

const RatingBar = ({ rating, total }) => (
  <div className="rating-bar">
    <div className="stars">
      {Array(5).fill(0).map((_, index) => (
        <RatingStar key={index} filled={index < rating} />
      ))}
    </div>
    <div className="bar">
      <div className="filled" style={{ width: `${(rating / total) * 100}%` }} />
    </div>
    <span>{rating}</span>
  </div>
);

export default RatingBar;
