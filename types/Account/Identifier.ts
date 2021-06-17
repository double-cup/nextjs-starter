import * as t from 'io-ts';

interface IdentifierBrand {
  readonly Identifier: unique symbol;
}

export const Identifier = t.brand(
  t.string,
  (s: string): s is t.Branded<string, IdentifierBrand> => {
    return s === 'ja';
  },
  'Identifier',
);

export type Identifier = t.TypeOf<typeof Identifier>;
