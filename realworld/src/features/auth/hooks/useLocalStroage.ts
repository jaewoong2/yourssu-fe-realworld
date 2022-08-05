import { useState } from 'react';

// 저희가 하고 싶은게
// 1. setItem을 조금 추상화 (-> useSignIn, useSignUp  + 다른곳에서도 다 쓸 수 있게)
// -> data(value) 를 받아오고 그것을 set시키는 것
// -> key 값도 필요하고
// -> data에 대한 Type 도 있으면 좋겠죠?
// -> 해당 key 에 대한 처리도 있으면 좋으니까

// 2. 로그인이 되어 있으면 메인페이지로 넘기는거 에요
// 어디로 넘기는지를 받아서 추상화시키는 것도 좋을 것같아요

// 3. 타입
// 새롭게 타입을 받아와서 사용할 수 있게 해주는게 좋을 것 같고

// 4. (+) 에러핸들링
// try-catch

export const useLocalstorage = <TValue = {}>() => {
  const [data, setData] = useState<TValue>();

  const setLocalStroageItem = (key: string, value: TValue) => {
    if (window) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const getLocalStorageItem = (key: string) => {
    const value = localStorage.getItem(key);
    if (value) {
      const item = JSON.parse(value);
      setData(item);
    }
  };
  return {
    setLocalStroageItem,
    getLocalStorageItem,
    data,
  };
};
