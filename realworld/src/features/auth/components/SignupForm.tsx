import React, { useCallback, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useForm } from '../hooks/useForm';
import { UserType } from '../recoil/atoms/userState';
import Input from './Input';

function SignupForm() {
  const [username, , onChangeUsername] = useForm('');
  const [email, , onChangeEmail] = useForm('');
  const [password, , onChangePassword] = useForm('');

  const fetcher = async (url: string, options?: RequestInit): Promise<UserType | Error> => {
    try {
      const data = (await fetch(url, { ...options })).json();
      return await data;
    } catch (err) {
      return err as Error;
    }
  };

  const data = useQuery<Promise<UserType | Error>, Error>(
    'signup',
    () =>
      fetcher('https://api.realworld.io/api/users', {
        method: 'POST',
        body: JSON.stringify({ user: { username, email, password } }),
        headers: {
          'Content-type': 'application/json',
        },
      }),
    {
      enabled: false,
    }
  );
  const queryClient = useQueryClient();

  const handleSignup = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      queryClient.fetchQuery('signup', () =>
        fetcher('https://api.realworld.io/api/users', {
          method: 'POST',
          body: JSON.stringify({ user: { username, email, password } }),
          headers: {
            'Content-type': 'application/json',
          },
        })
      );
    },
    [queryClient, username, email, password]
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const isEmail = (userEmail: string) => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(userEmail);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="/">Have an account?</a>
            </p>
            {isEmail(email) ? null : (
              <ul className="error-messages">
                <li>That email is already taken</li>
              </ul>
            )}
            <form onSubmit={handleSignup}>
              <Input
                onChange={onChangeUsername}
                value={username}
                type="text"
                placeholder="Your Name"
              />
              <Input onChange={onChangeEmail} value={email} type="text" placeholder="Email" />
              <Input
                onChange={onChangePassword}
                value={password}
                type="password"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
