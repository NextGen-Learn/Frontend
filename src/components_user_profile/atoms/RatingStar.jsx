import React from 'react';
import './RatingStar.scss';

const RatingStar = ({ filled }) => (
  <span className={`star ${filled ? 'filled' : ''}`}>&#9733;</span>
);

export default RatingStar;
