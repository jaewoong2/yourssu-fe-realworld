import { useRef, useState } from 'react';

export const useForm = (initialValue: string) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(initialValue);

  function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (ref.current) {
      ref.current.value = e.target.value;
    }
  }

  return [value, setValue, onChangeValue] as const;
};
