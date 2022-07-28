import React, { useCallback, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useForm } from '../hooks/useForm';
import { UserType } from '../recoil/atoms/userState';
import Input from './Input';

const signInFetch = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserType | Error> => {
  try {
    const data = await fetch('https://api.realworld.io/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user: { email, password } }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    return await data.json();
  } catch (err) {
    return err as Error;
  }
};

function SigninForm() {
  const [email, , onChangeEmail] = useForm('');
  const [password, , onChangePassword] = useForm('');

  const queryData = useQuery<null, Error, UserType>('user', () => null, {});

  const queryClient = useQueryClient();

  const handleLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      queryClient.fetchQuery('user', () => signInFetch({ email, password }));
    },
    [queryClient, email, password]
  );

  useEffect(() => {
    console.log(queryData);
    console.log(queryClient);
  }, [queryData, queryClient]);

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

export default SigninForm;
