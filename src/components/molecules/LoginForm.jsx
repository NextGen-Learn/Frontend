import React from 'react';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';

const LoginForm = () => (
  <div>
    <InputField placeholder="Логин или телефон" type="text" />
    <Button text="Продолжить" />
  </div>
);

export default LoginForm;