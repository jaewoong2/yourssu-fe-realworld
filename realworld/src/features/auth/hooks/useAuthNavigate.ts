import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalstorage } from './useLocalStroage';

type UseAuthNavigate = {
  key: string;
  to: string;
};

// 네이밍 변경
export const useAuthNavigate = <Deps = unknown>({ key, to }: UseAuthNavigate, deps: Deps[]) => {
  const navigate = useNavigate();
  const { getLocalStorageItem, data } = useLocalstorage();

  useEffect(() => {
    getLocalStorageItem(key);
    if (data) {
      navigate(to);
    }
  }, [...deps]);
};
