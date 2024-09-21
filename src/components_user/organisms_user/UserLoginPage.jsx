import React from 'react';
import LoginForm from '../molecules_user/LoginForm_user';
import DownHeader from '../molecules_user/DownHeader';
import NawBarLogin from '../molecules_user/NawBarLogin_user';
import './UserLoginPage.scss';

const LoginPage = () => {
  return (
    <div >
      <NawBarLogin />

      <div className="login-page">
        <div className="form-container">
          <LoginForm />
        </div>
      </div>
      <div className='down-header'>
        <DownHeader />
      </div>

    </div>
  );
};

export default LoginPage;
