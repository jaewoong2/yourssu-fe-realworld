import { useState } from 'react';

export const useForm = (
  initialValue: string
): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [value, setValue] = useState(initialValue);

  function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return [value, setValue, onChangeValue];
};
