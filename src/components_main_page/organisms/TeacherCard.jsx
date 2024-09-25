import React from 'react';
import './TeacherCard.scss';
import '../../assets/Avatar.png'

const TeacherCard = ({ image }) => {
  return (
    <div className="teacher-card">
      <img src={image} alt="" />
    </div>
  );
};

const TeacherCards = () => {
  const subjects = [
    { image: 'assets/Avatar.png', subject: 'Английский язык' },
    { image: 'path/to/philosophy.jpg', subject: 'Философия' },
    { image: 'path/to/history.jpg', subject: 'История' },
    { image: 'path/to/mathematics.jpg', subject: 'Математика' },
  ];

  return (
    <div className="teacher-cards-container">
      {subjects.map((item, index) => (
        <div key={index} className="card-wrapper">
          <TeacherCard image={item.image} />
          <p className="subject">{item.subject}</p>
        </div>
      ))}
    </div>
  );
};

export default TeacherCards;
