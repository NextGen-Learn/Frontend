import React from 'react';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="text-login">Вход и регистрация для профи</div> {/* Исправлено class на className */}

      <InputField placeholder="Логин или телефон" />

      <div className="button-container"> 
        <Button text="Продолжить" />
      </div>

      <a href="/reset-password" className="password-reset">
        Восстановить пароль
      </a>
    </div>
  );
};

export default LoginForm;
