import React, { useCallback } from 'react';
import { useMutation } from 'react-query';
import { useForm } from '../hooks/useForm';
import { UserType } from '../recoil/atoms/userState';
import Input from './Input';

const signInFetch = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserType | string> => {
  try {
    const data = await fetch('https://api.realworld.io/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user: { email, password } }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (data.ok) {
      return await data.json();
    }

    throw new Error('Error');
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
    return '';
  }
};

function SigninForm() {
  const [email, , handleEmail] = useForm('');
  const [password, , handlePassword] = useForm('');

  // CRUD {C, U, D} == { POST, PUT, DELETE }
  const { mutate } = useMutation(signInFetch);

  const handleLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate({ email, password });
    },
    [email, password]
  );

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/signup">Need an account?</a>
            </p>
            <form onSubmit={handleLogin}>
              <Input onChange={handleEmail} value={email} type="text" placeholder="email" />
              <Input
                onChange={handlePassword}
                value={password}
                type="password"
                placeholder="password"
              />
              <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninForm;
