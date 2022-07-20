import { useFetch } from './useFetch';

type Props = {
  email?: string;
  password?: string;
};

// type ReturnType = {
//   user: {
//     email: string,
//     token: string,
//     username: string,
//     bio: string,
//     image: string
//   }
// };

export const useSignin = ({ email, password }: Props) =>
  useFetch({
    url: 'https://api.realworld.io/api/users/login',
    method: 'POST',
    body: JSON.stringify({ user: { email, password } }),
  });
