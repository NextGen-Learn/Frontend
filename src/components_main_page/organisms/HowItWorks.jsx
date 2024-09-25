import React from 'react';
import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2>Как это работает?</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Отправьте запрос</h3>
          <p>Выберите преподавателя или услугу.</p>
        </div>
        <div className="step">
          <h3>2. Получите предложения</h3>
          <p>Оцените подходящие варианты.</p>
        </div>
        <div className="step">
          <h3>3. Выберите преподавателя</h3>
          <p>Начните занятия!</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
