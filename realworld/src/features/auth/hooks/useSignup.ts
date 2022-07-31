import { useFetch } from './useFetch';

type Props = {
  username?: string;
  email?: string;
  password?: string;
};

type ReturnType =
  | {
      user: {
        email: string;
        token: string;
        username: string;
        bio: string;
        image: string;
      };
    }
  | {
      errors: {
        body: string;
      };
    };

export const useSignup = ({ username, email, password }: Props) =>
  useFetch<ReturnType>({
    url: 'https://api.realworld.io/api/users',
    method: 'POST',
    body: JSON.stringify({ user: { username, email, password } }),
  });
