import React from 'react';
import styles from './Button_user';

export const Button = ({ text, onClick }) => {
  return (
    <button className={button_user} onClick={onClick}>
      {text}
    </button>
  );
};
