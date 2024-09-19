import React, { useState } from 'react';
import './DownHeader.scss';

const DownHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="down-header">
      <div className="column first-column">
        <a className="link" href="#new-order">Новый заказ</a>
        <div className="catalog" onClick={toggleMenu}>
          <div className={`catalog-title ${isMenuOpen ? 'active' : ''}`}>
            Каталог ссылок
            <span className={`arrow ${isMenuOpen ? 'open' : ''}`}>&#9660;</span> {/* Down arrow */}
          </div>
          <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
            <a className="dropdown-link" href="#link1" onClick={closeMenu}>Ссылка 1</a>
            <a className="dropdown-link" href="#link2" onClick={closeMenu}>Ссылка 2</a>
            <a className="dropdown-link" href="#link3" onClick={closeMenu}>Ссылка 3</a>
            <a className="dropdown-link" href="#link4" onClick={closeMenu}>Ссылка 4</a>
          </div>
        </div>
        <a className="link" href="#services">Все услуги</a>
        <a className="link" href="#reviews">Все отзывы</a>
        <a className="link" href="#terms">Условия использования</a>
      </div>
      <div className="column">
        <a className="link" href="#job">Работа в Минске</a>
        <a className="link" href="#specialists">Вход для специалистов</a>
      </div>
      <div className="column">
        <a className="link" href="#about">О компании</a>
        <a className="link" href="#vacancies">Вакансии</a>
      </div>
      <div className="column">
        <span>Служба поддержки:</span>
        <p><a className="link" href="#contacts">+375(29)577-37-87</a></p>
        <p><a className="link" href="#weekdays">mkomp06@gmail.com</a></p>
        
        <div className="social-icons">
          <a href="https://t.me/your-telegram-handle" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="https://youtube.com/your-youtube-channel" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <a className="link" href="#country-switch">Беларусь - сменить страну</a>
      </div>
    </div>
  );
};

export default DownHeader;
