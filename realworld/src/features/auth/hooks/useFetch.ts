// import { useState, useEffect } from 'react';

import { useEffect, useState } from 'react';

type FetchType = {
    url: string
    method: 'POST' | 'GET'
    body: string
};
// // useFetch('',asd)

// // unknown === any

export const useFetch = <T = unknown>({ url, method, body }: FetchType) => {
  const [value, setValue] = useState<T>();

  const fetchData = async () => {
    try {
      const data = await fetch(url, { method, body });
      setValue(data as T);
    } catch (err) {
      setValue(err as T);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return value;
};
