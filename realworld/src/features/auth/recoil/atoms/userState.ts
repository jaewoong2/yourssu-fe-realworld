import { atom } from 'recoil';

export type UserType = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
};

const defaultValue: UserType = {
  user: {
    email: '',
    token: '',
    username: '',
    bio: '',
    image: '',
  },
};

export const uerState = atom({
  key: 'uerState',
  default: defaultValue,
});
