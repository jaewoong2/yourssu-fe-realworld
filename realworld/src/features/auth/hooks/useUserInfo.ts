type ReturnType = {
  user: {
    email: string,
    token: string,
    username: string,
    bio: string,
    image: string
  }
} | {
  errors: {
    body: string,
  };
};

export const useSignin = (): Promise<ReturnType> => fetch('https://api.realworld.io/api/user', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
}).then((res) => res.json());
