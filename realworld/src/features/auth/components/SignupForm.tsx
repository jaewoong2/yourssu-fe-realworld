import React, { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from '../hooks/useForm';
import { UserType } from '../recoil/atoms/userState';
import Input from './Input';

const signUpFetch = async ({
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
  const [username, , handleUsername] = useForm('');
  const [email, , handleEmail] = useForm('');
  const [password, , handlePassword] = useForm('');

  const queryClient = useQueryClient();

  const { mutate, isError } = useMutation(signUpFetch);

  const handleSignup = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate({ username, email, password });
    },
    [queryClient, username, email, password]
  );

  const validateEmail = (userEmail: string) => {
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
              <a href="/signin">Have an account?</a>
            </p>
            {isError && (
              <ul className="error-messages">
                <li>오류발생</li>
              </ul>
            )}

            <form onSubmit={handleSignup}>
              <Input
                onChange={handleUsername}
                value={username}
                type="text"
                placeholder="Your Name"
              />
              <Input onChange={handleEmail} value={email} type="text" placeholder="Email" />
              {!validateEmail(email) && (
                <ul className="error-messages">
                  <li>Email Error</li>
                </ul>
              )}
              <Input
                onChange={handlePassword}
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
