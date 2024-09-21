import React from 'react';
import './NawBarLogin_user.module.scss';
import Logo from '../../components/atoms/logo/Logo'
import styles from './NawBarLogin_user.module.scss';


const NawBarLogin = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Logo className={styles.user_logo} />
      </div>
      <div className="navbar-right">
        <a href="/specialists" className="navbar-link">Вход для специалистов</a>
        <a href="/students" className="navbar-link">Вход для учеников</a>
      </div>
    </div>
  );
};

export default NawBarLogin;
