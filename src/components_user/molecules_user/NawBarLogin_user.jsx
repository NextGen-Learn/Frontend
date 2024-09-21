import React from 'react';
import Logo from '../atoms_user/Logo_user';
import './NawBarLogin_user.scss';

const NawBarLogin = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Logo />
      </div>
      <div className="navbar-right">
        <a href="/specialists" className="navbar-link">Вход для специалистов</a>
        <a href="/students" className="navbar-link">Вход для учеников</a>
      </div>
    </div>
  );
};

export default NawBarLogin;
