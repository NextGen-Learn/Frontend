import React from 'react';
import UserProfileForm from '../organisms/UserProfile';
import './Profile.scss';
import NawBarLogin from '../../components_user/molecules_user/NawBarLogin_user';
import DownHeader from '../../components/molecules/footer/DownHeader';

const UserProfile = () => {
  const user = {
    name: 'Наталья Сергеевна Лебедянская',
    rating: 4.5,
    reviewsCount: 5,
    imageUrl: '../../assets/Avatar.png',
  };

  const reviews = [
    { id: 1, date: '9 сентября 2024', subject: 'Английский язык', text: 'Отличный преподаватель!' },
    { id: 2, date: '8 сентября 2024', subject: 'ЕГЭ по английскому', text: 'Очень помогла.' },
    { id: 3, date: '24 июня 2024', subject: 'Английский язык', text: 'Прекрасный преподаватель!' },
  ];

  return (
    <div>
      <NawBarLogin />

      <div className="user-profile-container">
        <div className="sidebar">
          <a href="#" className="sidebar-link">
            <span className="arrow">← Специалисты</span>
          </a>
          <a href="#" className="sidebar-link">
            Отзывы
          </a>
        </div>

        <div className="main-content">
          <UserProfileForm user={user} reviews={reviews} />
        </div>
      </div>
      <DownHeader />
    </div>
  );
};

export default UserProfile;
