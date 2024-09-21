import React from 'react';
import InputField from '../atoms_user/InputField';
import { Button } from '../atoms_user/Button_user/Button_user';
import './LoginForm_user.scss';

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="text-login">Вход и регистрация для профи</div>

      {/* Новый контейнер для InputField и Button */}
      <div className="input-button-container">
        <InputField placeholder="" />
        <Button text="Продолжить" />
      </div>
    </div>
  );
};

export default LoginForm;
