import React, { useState } from 'react';
import InputField from '../atoms_user/InputField';
import styles from './LoginForm_user.module.scss';
import Button from '../../components/atoms/button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterUserForm = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError('');
    try {
        const response = await axios.post('http://127.0.0.1:8001/api/sign_up_user/', {
            email,
            user_name: userName,
            phone_number: phoneNumber,
            password,
          });

      console.log(response.data);

      navigate('/cabinet/user/login');

    } catch (err) {
      setError('Ошибка при регистрации. Пожалуйста, проверьте данные и попробуйте снова.');
      console.error('Registration error:', err.response?.data || err.message);
    }
  };

  return (
    <div className={styles.input_button_container}>
      <div className={styles.text_login}>Регистрация</div>
      <hr className={styles.separator} />
      <div className={styles.text_login_info}>
        Пожалуйста, заполните все необходимые поля для регистрации.
      </div>

      <InputField
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        placeholder="Имя пользователя"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <InputField
        placeholder="Номер телефона"
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <InputField
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <div className={styles.error_message}>{error}</div>}
      <Button text="Зарегистрироваться" className={styles.login_button} onClick={handleRegister} />
      <a href="/cabinet/user/login" className='link'>Уже есть аккаунт? Вход</a>
    </div>
  );
};

export default RegisterUserForm;
