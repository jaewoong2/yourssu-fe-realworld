import React, { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <fieldset className="form-group">
      <input ref={ref} className={`form-control form-control-lg ${className}`} {...props} />
    </fieldset>
  );
});

export default Input;
