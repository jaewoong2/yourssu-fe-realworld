import React, { InputHTMLAttributes } from 'react';

type InputProps = {
  ref?: React.RefObject<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ className, ref, ...props }: InputProps) {
  return (
    <fieldset className="form-group">
      <input ref={ref} className={`form-control form-control-lg ${className}`} {...props} />
    </fieldset>
  );
}

export default Input;
