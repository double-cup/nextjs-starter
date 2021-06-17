import * as t from 'io-ts';
import { FC, Fragment, useState } from 'react';
import { Identifier } from '../../../types/Account/Identifier';
import { Maybe } from '../../../types/misc';
import { InputField } from '../../Layout/InputField';

export const SignInForm: FC = () => {
  const [id, setId] = useState<Maybe<Identifier>>(null);

  return (
    <Fragment>
      <InputField<Identifier>
        type={'text'}
        decode={Identifier.decode}
        value={id}
        onLeft={(errors: t.Errors) => {
          console.error(errors);
          setId(null);
          return errors;
        }}
        onRight={(validId: Identifier) => {
          console.log(validId);
          setId(validId);
          return validId;
        }}
      />
      <pre>{JSON.stringify({ id }, null, 2)}</pre>
    </Fragment>
  );
};
