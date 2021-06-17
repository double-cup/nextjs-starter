import * as t from 'io-ts';

interface TextBrand {
  readonly Text: unique symbol;
}

export const Text = t.brand(
  t.string,
  (s: string): s is t.Branded<string, TextBrand> => {
    return typeof s === 'string';
  },
  'Text',
);

export type Text = t.TypeOf<typeof Text>;
