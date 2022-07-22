import React, { InputHTMLAttributes } from 'react';

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

function Input({ className, ...props }: InputProps) {
  return (
    <fieldset className="form-group">
      <input className={`form-control form-control-lg ${className}`} {...props} />
    </fieldset>
  );
}

export default Input;
