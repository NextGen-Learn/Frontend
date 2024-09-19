import React from 'react';
import LoginForm from '../molecules/LoginForm';
import DownHeader from '../molecules/DownHeader';
import NawBarLogin from '../molecules/NawBarLogin';
import './LoginPage.scss';

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
