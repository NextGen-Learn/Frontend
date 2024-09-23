import React from 'react';
import './InputField.scss';

const InputField = ({ placeholder, type, value, onChange }) => {
  return (
    <div className="input-container">
      <input
        className="input-field"
        type={type} // Используем type, переданный из props
        placeholder="" // Оставляем пустым, чтобы label работал
        value={value} // Передаем текущее значение
        onChange={onChange} // Добавляем handler для изменения значения
        required
      />
      <label className="placeholder">{placeholder}</label>
    </div>
  );
};

export default InputField;
