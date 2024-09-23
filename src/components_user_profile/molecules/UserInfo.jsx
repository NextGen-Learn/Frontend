import React from 'react';
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import './UserInfo.scss';

const UserInfo = ({ name, rating, reviewsCount, imageUrl }) => (
  <div className="user-info">
    <Avatar src={imageUrl} alt={name} />
    <div className="info">
      <h2 className="fio">{name}</h2>
      <div className="rating">
        <span>{rating}★</span>
        <span>{reviewsCount} отзыв</span>
      </div>
      <Button text="Изменить профиль" className="secondary" />
    </div>
  </div>
);

export default UserInfo;
