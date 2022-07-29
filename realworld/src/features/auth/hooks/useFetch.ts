import { useEffect, useState } from 'react';

type FetchType = {
  url: string;
  method: 'POST' | 'GET';
  body?: string;
};

export const useFetch = <T = unknown>({ url, method, body }: FetchType) => {
  const [value, setValue] = useState<T>();

  if (method === 'GET') {
    const fetchData = async () => {
      try {
        const data = await fetch(url, {
          method,
          headers: {
            'Content-type': 'application/json',
          },
        });
        setValue(data as T);
      } catch (err) {
        setValue(err as T);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);
  } else {
    const fetchData = async () => {
      try {
        const data = await fetch(url, {
          method,
          body,
          headers: {
            'Content-type': 'application/json',
          },
        });
        setValue(data as T);
      } catch (err) {
        setValue(err as T);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);
  }
  return value;
};
