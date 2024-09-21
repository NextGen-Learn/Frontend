import React from 'react';
import InputField from '../atoms_user/InputField';
import styles from './LoginForm_user.module.scss';
import Button from '../../components/atoms/button/Button';


export const LoginFormUser = () => {
  return (
    <div className={styles.login_form}>
      <div className={styles.text_login}>Вход и регистрация </div>

      {/* Новый контейнер для InputField и Button */}
      <div className={styles.input_button_container}>
        <InputField placeholder="" />
        <Button text="Продолжить" className={styles.login_button} />
      </div>
    </div>
  );
};