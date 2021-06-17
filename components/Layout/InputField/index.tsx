import * as e from 'fp-ts/Either';
import { flow } from 'fp-ts/function';
import * as t from 'io-ts';
import { Validation } from 'io-ts';
import { ChangeEvent, Fragment, ReactElement } from 'react';
import { useCurriedState } from '../../../hooks/useCurriedState';
import { Maybe } from '../../../types/misc';

interface inputOnChangeHandler {
  (inputEl: ChangeEvent<HTMLInputElement>): string;
}

const onChangeGetValue: inputOnChangeHandler = (inputEl) => {
  const {
    target: { value },
  } = inputEl;
  return value.toString();
};

interface InputFieldProps<T> {
  value: Maybe<T>;
  decode: (input: T) => Validation<T>;
  onLeft: (errors: t.Errors) => t.Errors;
  onRight: (validValue: T) => T;
  type: 'text' | 'password';
}

const window: Window;

export function InputField<T>({ value, decode, onLeft, onRight, type }: InputFieldProps<T>): ReactElement {
  const [localValue, setLocalValue] = useCurriedState(String(value) ?? '');
  return (
    <Fragment>
      <label>Identifier</label>
      <input
        type={type}
        onChange={flow(onChangeGetValue, setLocalValue, decode, e.fold(onLeft, onRight))}
        value={localValue ? `${localValue}` : ''}
      />
      <pre>{JSON.stringify(localValue, null, 2)}</pre>
    </Fragment>
  );
}
