import React, { useCallback, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { useForm } from '../hooks/useForm';
import { UserType } from '../recoil/atoms/userState';
import Input from './Input';

const fetcher = async (url: string, options?: RequestInit): Promise<UserType | Error> => {
  try {
    const data = (await fetch(url, { ...options })).json();
    return await data;
  } catch (err) {
    return err as Error;
  }
};

function LoginForm() {
  const [email, , onChangeEmail] = useForm('');
  const [password, , onChangePassword] = useForm('');
  const data = useQuery<Promise<UserType | Error>, Error>(
    'login',
    () =>
      fetcher('https://api.realworld.io/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ user: { email, password } }),
        headers: {
          'Content-type': 'application/json',
        },
      }),
    {
      enabled: false,
    }
  );
  const queryClient = useQueryClient();

  const handleLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      queryClient.fetchQuery('login', () =>
        fetcher('https://api.realworld.io/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ user: { email, password } }),
          headers: {
            'Content-type': 'application/json',
          },
        })
      );
    },
    [queryClient, email, password]
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/">Need an account?</a>
            </p>
            <form onSubmit={handleLogin}>
              <Input onChange={onChangeEmail} value={email} type="text" placeholder="email" />
              <Input
                onChange={onChangePassword}
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

export default LoginForm;
