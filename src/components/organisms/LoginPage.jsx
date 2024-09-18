import React from 'react';
import Text from '../atoms/Text';
import LoginForm from '../molecules/LoginForm';

const LoginPage = () => (
  <div>
    <Text type="h1">Вход и регистрация для профи</Text>
    <Text>Отправим на телефон уведомление для подтверждения входа</Text>
    <LoginForm />
    <Text>Восстановить пароль</Text>
    <Text>Чат с поддержкой</Text>
  </div>
);

export default LoginPage;