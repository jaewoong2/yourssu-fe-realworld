import { atom } from 'recoil';

type UserType = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
};

export const uerState = atom({
  key: 'uerState',
  default: {} as UserType,
});
