import { FC, Fragment, useState } from 'react';

export const Field: FC = ({ initial, key, label, type, onChange }) => {
  const [value, setValue] = useState(initial);

  return (
    <Fragment>
      <div>
        <label htmlFor={`field_${key}`}>{label}:</label>
        <input
          id={`field_${key}`}
          type={type.toString()}
          value={value}
          onChange={(event) => {
            const input = event.target.value ?? '';
            setValue(input);
            onChange(input);
          }}
        />
      </div>
    </Fragment>
  );
};
