import React from 'react';
import { useForm } from '../hooks/useForm';
import Input from './Input';
import { useSignin } from '../hooks/useSignin';
import FormLayout from './FormLayout';
import { useAuthNavigate } from '../hooks/useAuthNavigate';

function SigninForm() {
  const [email, handleEmail] = useForm();
  const [password, handlePassword] = useForm();
  const { handleSignin, data } = useSignin({ email, password });
  useAuthNavigate({ key: 'user', to: '/' }, [data]);

  return (
    <FormLayout aHref="/signup" aMessage="Need an account?" authType="Sign in">
      <form onSubmit={handleSignin}>
        <Input onChange={handleEmail} value={email} type="text" placeholder="email" />
        <Input onChange={handlePassword} value={password} type="password" placeholder="password" />
        <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
          Sign in
        </button>
      </form>
    </FormLayout>
  );
}

export default SigninForm;
