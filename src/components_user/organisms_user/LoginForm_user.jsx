import React, { useState } from 'react';
import InputField from '../atoms_user/InputField';
import styles from './LoginForm_user.module.scss';
import Button from '../../components/atoms/button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const LoginFormUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Инициализируем useNavigate

  const handleLogin = async () => {
    setError(''); // Сбрасываем ошибку при новом запросе
    try {
      const response = await axios.post('http://127.0.0.1:8001/api/sign_in_user/', {
        email,
        password
      });

      console.log(response.data);
      // Здесь можно сохранить токен или данные пользователя в localStorage, если они у вас есть.
      // Если есть токен:
      // localStorage.setItem('token', response.data.token);

      // Перенаправляем пользователя на главную страницу
      navigate('/cabinet/user'); // Замените '/' на путь к вашей главной странице, если он отличается

    } catch (err) {
      setError('Неправильный email или пароль');
      console.error('Login error:', err.response?.data || err.message); // Для более детальной информации
    }
  };

  return (
    <div className={styles.input_button_container}>
      <div className={styles.text_login}>Вход и регистрация</div>
      <hr className={styles.separator} />
      <div className={styles.text_login_info}>
        Специалисты не видят ваш номер. Вы сами решите, кому он будет доступен.
      </div>

      <InputField
        placeholder="Email"
        type="email" // Убедитесь, что указали правильный тип
        value={email} // Передаем текущее состояние email
        onChange={(e) => setEmail(e.target.value)} // Обрабатываем изменение
      />
      <InputField
        placeholder="Пароль"
        type="password" // Убедитесь, что указали правильный тип
        value={password} // Передаем текущее состояние password
        onChange={(e) => setPassword(e.target.value)} // Обрабатываем изменение
      />
      
      {error && <div className={styles.error_message}>{error}</div>}
      <Button text="Продолжить" className={styles.login_button} onClick={handleLogin} />
    </div>
  );
};

export default LoginFormUser;
