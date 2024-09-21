import React from 'react';
import './InputField.scss';

const InputField = ({ placeholder }) => {
  return (
    <div className="input-container">
      <input
        className="input-field"
        type="tel"
        placeholder="+375 29 333 33 33" // Используем для отображения номера телефона
        required
      />
      <label className="placeholder">{placeholder}</label>
    </div>
  );
};
export default InputField;
