import React from 'react';
import UserInfo from '../molecules/UserInfo';
import RatingBar from '../molecules/RatingBar';
import ReviewList from './ReviewList';
import './UserProfile.scss';
import Order from '../molecules/OrdedPanel';

const UserProfileForm = ({ user, reviews }) => (
  <div className="tutor-profile">
    <div className="header">
      <Order />
    </div>
    <div>
      <UserInfo name={user.name} rating={user.rating} reviewsCount={user.reviewsCount} imageUrl={user.imageUrl} />
    </div>
    <RatingBar rating={user.rating} total={5} />
    <ReviewList reviews={reviews} />
  </div>
);

export default UserProfileForm;
