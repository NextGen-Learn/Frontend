import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = ({ text, onClick, className }) => {

  const buttonClassNames = classNames(styles.button, className)

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
