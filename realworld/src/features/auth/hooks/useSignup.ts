import { useCallback } from 'react';
import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import { ErrorType, UserType } from '../recoil/atoms/userState';

const signUpFetch = async ({
  email,
  password,
  username,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const data = await axios.post<UserType>('https://api.realworld.io/api/users/login', {
    user: { email, password, username },
  });
  return data.data;
};

export const useSignup = ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const mutation = useMutation<
    UserType,
    AxiosError<ErrorType>,
    Record<'username' | 'email' | 'password', string>
  >(signUpFetch);
  // mutation.data
  // mutation.error
  // mutationFn arguments type

  const handleSignup = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutation.mutate({
        username,
        email,
        password,
      });
    },
    [username, email, password]
  );

  return { ...mutation, handleSignup };
};
