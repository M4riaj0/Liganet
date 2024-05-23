import React from 'react';
import './InputBox.css';

const InputBox = ({ name, type = 'text', placeholder, value, onChange, icon }) => {
  return (
    <div className="input-box">
      <label className="NombreInput">{name}</label>
      <div className="input-icon-wrapper">
        <input
          type={type}
          name={name.toLowerCase()}
          placeholder={placeholder || name}
          value={value}
          onChange={onChange}
          className="input"
        />
        {icon && <div className="input-icon">{icon}</div>}
      </div>
    </div>
  );
};

export default InputBox;