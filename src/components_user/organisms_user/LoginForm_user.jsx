import React from 'react';
import InputField from '../atoms_user/InputField';
import styles from './LoginForm_user.module.scss';
import Button from '../../components/atoms/button/Button';

export const LoginFormUser = () => {
  return (
      <div className={styles.input_button_container}>
        <div className={styles.text_login}>Вход и регистрация</div>
        <hr className={styles.separator} />
        <div className={styles.text_login_info}>Специалисты не видят ваш номер. Вы сами решите, кому он будет доступен</div>
        <InputField placeholder="+375(29)577-37-87" type="tel" />
        <Button text="Продолжить" className={styles.login_button} />
      </div>
  );
};
