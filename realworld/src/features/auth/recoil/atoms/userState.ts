import { atom } from 'recoil';

export type UserType = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
  errors?: {
    email?: string[];
    password?: string[];
    username?: string[];
  };
};

export type ErrorType = {
  errors: {
    email?: string[];
    password?: string[];
    username?: string[];
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
