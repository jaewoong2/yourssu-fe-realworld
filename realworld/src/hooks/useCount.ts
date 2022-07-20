import { useState } from 'react';

export const useCount = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((c) => c + 1);
  };

  const decrease = () => {
    setCount((c) => c - 1);
  };

  return { count, increase, decrease };
};
