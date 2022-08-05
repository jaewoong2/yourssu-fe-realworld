import { useCallback } from 'react';
import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import { ErrorType, UserType } from '../recoil/atoms/userState';

import { useLocalstorage } from './useLocalStroage';

const signInFetch = async ({ email, password }: { email: string; password: string }) => {
  // Request
  const data = await axios.post<UserType>('https://api.realworld.io/api/users/login', {
    user: { email, password },
  });

  // Response
  return data.data;
};

// useSigin 에서 useLocalStorage
export const useSignin = ({ email, password }: { email: string; password: string }) => {
  const { setLocalStroageItem } = useLocalstorage<UserType>();
  const mutation = useMutation<
    UserType,
    AxiosError<ErrorType>,
    Record<'email' | 'password', string>
  >(signInFetch, {
    onSuccess: (data) => {
      setLocalStroageItem('user', data);
    },
  });

  const handleSignin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutation.mutate({
        email,
        password,
      });
    },
    [email, password]
  );

  return { ...mutation, handleSignin };
};
