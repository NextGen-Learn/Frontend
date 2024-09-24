import React, { useState } from 'react';
import InputField from '../atoms_user/InputField';
import styles from './LoginForm_user.module.scss';
import Button from '../../components/atoms/button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginFormUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    try {
      const response = await axios.post('http://127.0.0.1:8001/api/sign_in_user/', {
        email,
        password
      });

      console.log(response.data);

      navigate('/cabinet/user');

    } catch (err) {
      setError('Неправильный email или пароль');
      console.error('Login error:', err.response?.data || err.message);
    }
  };

  return (
    <div className={styles.input_button_container}>
      <div className={styles.text_login}>Вход</div>
      <hr className={styles.separator} />
      <div className={styles.text_login_info}>
        Специалисты не видят ваш номер.
      </div>

      <InputField
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      {error && <div className={styles.error_message}>{error}</div>}
      <Button text="Войти" className={styles.login_button} onClick={handleLogin} />
      <a href="/cabinet/user/register" className='link'>регистрация</a>
    </div>
  );
};

export default LoginFormUser;
