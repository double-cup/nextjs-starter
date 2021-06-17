import { useState } from 'react';

interface setCurriedState<S> {
  (newState: S): S;
}

export const useCurriedState = <S = string>(initialState: S | (() => S)): [S, setCurriedState<S>] => {
  const [value, setValue] = useState(initialState);
  const setCurriedValue: setCurriedState<S> = (newState) => {
    setValue(newState);
    return newState;
  };

  return [value, setCurriedValue];
};
