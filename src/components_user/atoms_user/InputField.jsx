import React from 'react';
import './InputField.scss';

const InputField = ({ placeholder }) => {
  return (
    <div className="input-container">
      <input
        className="input-field"
        type="tel"
        placeholder=""
        required
      />
      <label className="placeholder">{placeholder}</label>
    </div>
  );
};
export default InputField;
