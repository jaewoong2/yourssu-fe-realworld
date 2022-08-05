import { useState } from 'react';

// 비제어 컴포넌트, 제어 컴포넌트
export const useForm = () => {
  const [value, setValue] = useState('');

  function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return [value, onChangeValue] as const;
};
