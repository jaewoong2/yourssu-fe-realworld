import React, { useCallback, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import { useForm } from '../hooks/useForm';
import { UserType, userState } from '../recoil/atoms/userState';
import Input from './Input';

const SignUpFetch = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}): Promise<UserType | Error> => {
  try {
    const data: Response = await fetch('https://api.realworld.io/api/users', {
      method: 'POST',
      body: JSON.stringify({ user: { username, email, password } }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (data.status === 200) {
      return await data.json();
    }

    throw new Error();
  } catch (err) {
    return err as Error;
  }
};

// redux
// recoil + usequery

function SignupForm() {
  const [username, , onChangeUsername] = useForm('');
  const [email, , onChangeEmail] = useForm('');
  const [password, , onChangePassword] = useForm('');

  const [, setUser] = useRecoilState(userState);

  const queryData = useQuery<null, Error, UserType>('user', () => null, {
    enabled: false,
    onSuccess: (data) => {
      if (data?.user) {
        setUser({ user: data.user });
      }
    },
  });
  const queryClient = useQueryClient();

  const handleSignup = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      queryClient.fetchQuery('user', () => SignUpFetch({ username, email, password }));
    },
    [queryClient, username, email, password]
  );

  const validateEmail = (userEmail: string) => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(userEmail);
  };

  useEffect(() => {
    console.log(queryData);
    console.log(queryClient);
  }, [queryData, queryClient]);

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="/signin">Have an account?</a>
            </p>
            {queryData.isError && (
              <ul className="error-messages">
                <li>오류발생</li>
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
              {!validateEmail(email) && (
                <ul className="error-messages">
                  <li>Email Error</li>
                </ul>
              )}
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
