import React from 'react';

const Input = ({
  label, name, placeholder, style, type, className, required, onChange,
}) => (
  <div className={className}>
    <label>{label}</label>
    <input
      name={name}
      placeholder={placeholder}
      style={style || {}}
      type={type}
      required={required}
      onChange={onChange}
    />
  </div>
);

export default Input;
