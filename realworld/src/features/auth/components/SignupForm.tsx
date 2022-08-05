import React from 'react';
import { validateEmail } from '../../utils';
import { useForm } from '../hooks/useForm';
import { useSignup } from '../hooks/useSignup';
import FormLayout from './FormLayout';
import Input from './Input';

function SignupForm() {
  const [username, handleUsername] = useForm();
  const [email, handleEmail] = useForm();
  const [password, handlePassword] = useForm();
  // POST PUT DELETE
  const { isError, handleSignup, error } = useSignup({ email, password, username });

  return (
    <FormLayout aHref="/signin" aMessage="Have an account?" authType="Sign up">
      {isError && (
        <ul className="error-messages">
          <li>{JSON.stringify(error?.response?.data.errors)}</li>
        </ul>
      )}
      <form onSubmit={handleSignup}>
        <Input onChange={handleUsername} value={username} type="text" placeholder="Your Name" />
        <Input onChange={handleEmail} value={email} type="text" placeholder="Email" />
        {!validateEmail(email) && (
          <ul className="error-messages">
            <li>Email Error</li>
          </ul>
        )}
        <Input onChange={handlePassword} value={password} type="password" placeholder="Password" />
        <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
          Sign up
        </button>
      </form>
    </FormLayout>
  );
}

export default SignupForm;
