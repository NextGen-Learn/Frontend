import React from 'react';
import RegisterUserForm from '../organisms_user/RegisterUserForm';
import DownHeader from '../../components/molecules/footer/DownHeader';
import NawBarLogin from '../molecules_user/NawBarLogin_user';
import './UserLoginPage.scss';

export const RegisteUser = () => {
  return (
    <div>
      <NawBarLogin />

      <div className="login-page">
        <div className="form-container">
          <RegisterUserForm />
        </div>
      </div>

      <DownHeader />
    </div>
  );
};
