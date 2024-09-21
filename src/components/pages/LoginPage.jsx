import React from 'react';
import LoginForm from '../organisms/LoginForm';
import DownHeader from '../molecules/footer/DownHeader';
import NawBarLogin from '../molecules/NawBarLogin';
import styles from './LoginPage.scss';

const LoginPage = () => {
  return (
    <div >
      <NawBarLogin />

      <div className="login-page">
        <div className="form-container">
          <LoginForm />
        </div>
      </div>
      <div className={styles.down_header}>
        <DownHeader />
      </div>

    </div>
  );
};

export default LoginPage;
