import React from 'react';
import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2>Как это работает?</h2>
      <div className="steps">
        <div className="step">
          <div className="rectangle"></div>
          <h3>Оставьте заказ</h3>
          <p>Мы зададим все важные вопросы, чтобы вам было проще описать задачу.</p>
        </div>
        <div className="step">
          <div className="rectangle"></div>
          <h3>Специалисты напишут сами</h3>
          <p>Покажем заказ подходящим профи. Они напишут, если готовы помочь.</p>
        </div>
        <div className="step">
          <div className="rectangle"></div>
          <h3>Выберите подоходящего </h3>
          <p>Обо всех деталях договаривайтесь со специалистом и платите ему напрямую.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
