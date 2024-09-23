import React from 'react';
import './Button.scss';

const Button = ({ text, onClick, className }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {text}
  </button>
);

export default Button;
