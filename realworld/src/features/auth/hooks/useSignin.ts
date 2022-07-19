import { useFetch } from './useFetch';

type Props = {
  username?: string
  password?: string
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

export const useSignin = ({ username, password }: Props) => useFetch({
  url: 'https://api.realworld.io/api/login',
  method: 'POST',
  body: JSON.stringify({ username, password }),
});
