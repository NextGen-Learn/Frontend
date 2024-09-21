import React from 'react';
import { LoginFormUser } from '../organisms_user/LoginForm_user';
import DownHeader from '../../components/molecules/footer/DownHeader';
import NawBarLogin from '../molecules_user/NawBarLogin_user';
import './UserLoginPage.scss';

export const UserLoginPage = () => {
  return (
    <div >
      <NawBarLogin />

      <div className="login-page">
        <div className="form-container">
          <LoginFormUser />
        </div>
      </div>

        <DownHeader />
    </div>
  );
};

