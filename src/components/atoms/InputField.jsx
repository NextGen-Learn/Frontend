import React from 'react';
import './InputField.scss';

const InputField = ({ placeholder, type }) => {
  return (
    <div className="input-container">
      <input 
        className="input-field"
        type={type || 'text'}
        placeholder=" "
        required 
      />
      <label className="placeholder">{placeholder}</label>
    </div>
  );
};

export default InputField;
