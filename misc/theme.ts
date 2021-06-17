import { PrismTheme } from 'prism-react-renderer';

export enum Color {
  Base00 = '#1B2B34',
  Base01 = '#343D46',
  Base02 = '#4F5B66',
  Base03 = '#65737E',
  Base04 = '#A7ADBA',
  Base05 = '#C0C5CE',
  Base06 = '#CDD3DE',
  Base07 = '#D8DEE9',
  Red = '#EC5f67',
  Orange = '#F99157',
  Yellow = '#FAC863',
  Green = '#99C794',
  Cyan = '#5FB3B3',
  Blue = '#6699CC',
  Purple = '#C594C5',
  Brown = '#AB7967',
}

export const Theme = {
  char: Color.Base07,
  comment: Color.Base03,
  keyword: Color.Red,
  primitive: Color.Blue,
  string: Color.Green,
  variable: Color.Cyan,
  boolean: Color.Orange,
  punctuation: Color.Cyan,
  tag: Color.Red,
  function: Color.Base07,
  className: Color.Yellow,
  method: Color.Blue,
  operator: Color.Blue,
};

export const prismTheme: PrismTheme = {
  plain: {
    backgroundColor: Color.Base00,
    color: Color.Base07,
  },
  styles: [
    {
      types: ['attr-name'],
      style: {
        color: Theme.keyword,
      },
    },
    {
      types: ['attr-value'],
      style: {
        color: Theme.string,
      },
    },
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata', 'shebang'],
      style: {
        color: Theme.comment,
      },
    },
    {
      types: ['property', 'number', 'function-name', 'constant', 'symbol', 'deleted'],
      style: {
        color: Theme.primitive,
      },
    },
    {
      types: ['boolean'],
      style: {
        color: Theme.boolean,
      },
    },
    {
      types: ['tag'],
      style: {
        color: Theme.tag,
      },
    },
    {
      types: ['string'],
      style: {
        color: Theme.string,
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: Theme.string,
      },
    },
    {
      types: ['selector', 'char', 'builtin', 'inserted'],
      style: {
        color: Theme.char,
      },
    },
    {
      types: ['function'],
      style: {
        color: Theme.function,
      },
    },
    {
      types: ['operator', 'entity', 'url', 'variable'],
      style: {
        color: Theme.variable,
      },
    },
    {
      types: ['keyword'],
      style: {
        color: Theme.keyword,
      },
    },
    {
      types: ['at-rule', 'class-name'],
      style: {
        color: Theme.className,
      },
    },
    {
      types: ['important'],
      style: {
        fontWeight: '400',
      },
    },
    {
      types: ['bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
  ],
};

export const monacoTheme = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      foreground: '65737e',
      token: 'comment',
    },
    {
      foreground: '65737e',
      token: 'punctuation.definition.comment',
    },
    {
      foreground: 'cdd3de',
      token: 'variable',
    },
    {
      foreground: 'c594c5',
      token: 'keyword',
    },
    {
      foreground: 'c594c5',
      token: 'storage.type',
    },
    {
      foreground: 'c594c5',
      token: 'storage.modifier',
    },
    {
      foreground: '5fb3b3',
      token: 'keyword.operator',
    },
    {
      foreground: '5fb3b3',
      token: 'constant.other.color',
    },
    {
      foreground: '5fb3b3',
      token: 'punctuation',
    },
    {
      foreground: '5fb3b3',
      token: 'meta.tag',
    },
    {
      foreground: '5fb3b3',
      token: 'punctuation.definition.tag',
    },
    {
      foreground: '5fb3b3',
      token: 'punctuation.separator.inheritance.php',
    },
    {
      foreground: '5fb3b3',
      token: 'punctuation.definition.tag.html',
    },
    {
      foreground: '5fb3b3',
      token: 'punctuation.definition.tag.begin.html',
    },
    {
      foreground: '5fb3b3',
      token: 'punctuation.definition.tag.end.html',
    },
    {
      foreground: '5fb3b3',
      token: 'punctuation.section.embedded',
    },
    {
      foreground: '5fb3b3',
      token: 'keyword.other.template',
    },
    {
      foreground: '5fb3b3',
      token: 'keyword.other.substitution',
    },
    {
      foreground: 'eb606b',
      token: 'entity.name.tag',
    },
    {
      foreground: 'eb606b',
      token: 'meta.tag.sgml',
    },
    {
      foreground: 'eb606b',
      token: 'markup.deleted.git_gutter',
    },
    {
      foreground: '6699cc',
      token: 'entity.name.function',
    },
    {
      foreground: '6699cc',
      token: 'meta.function-call',
    },
    {
      foreground: '6699cc',
      token: 'variable.function',
    },
    {
      foreground: '6699cc',
      token: 'support.function',
    },
    {
      foreground: '6699cc',
      token: 'keyword.other.special-method',
    },
    {
      foreground: '6699cc',
      token: 'meta.block-level',
    },
    {
      foreground: 'f2777a',
      token: 'support.other.variable',
    },
    {
      foreground: 'f2777a',
      token: 'string.other.link',
    },
    {
      foreground: 'f99157',
      token: 'constant.numeric',
    },
    {
      foreground: 'f99157',
      token: 'constant.language',
    },
    {
      foreground: 'f99157',
      token: 'support.constant',
    },
    {
      foreground: 'f99157',
      token: 'constant.character',
    },
    {
      foreground: 'f99157',
      token: 'variable.parameter',
    },
    {
      foreground: 'f99157',
      token: 'keyword.other.unit',
    },
    {
      foreground: '99c794',
      fontStyle: 'normal',
      token: 'string',
    },
    {
      foreground: '99c794',
      fontStyle: 'normal',
      token: 'constant.other.symbol',
    },
    {
      foreground: '99c794',
      fontStyle: 'normal',
      token: 'constant.other.key',
    },
    {
      foreground: '99c794',
      fontStyle: 'normal',
      token: 'entity.other.inherited-class',
    },
    {
      foreground: '99c794',
      fontStyle: 'normal',
      token: 'markup.heading',
    },
    {
      foreground: '99c794',
      fontStyle: 'normal',
      token: 'markup.inserted.git_gutter',
    },
    {
      foreground: '99c794',
      fontStyle: 'normal',
      token: 'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
    },
    {
      foreground: 'fac863',
      token: 'entity.name.class',
    },
    {
      foreground: 'fac863',
      token: 'entity.name.type.class',
    },
    {
      foreground: 'fac863',
      token: 'support.type',
    },
    {
      foreground: 'fac863',
      token: 'support.class',
    },
    {
      foreground: 'fac863',
      token: 'support.orther.namespace.use.php',
    },
    {
      foreground: 'fac863',
      token: 'meta.use.php',
    },
    {
      foreground: 'fac863',
      token: 'support.other.namespace.php',
    },
    {
      foreground: 'fac863',
      token: 'markup.changed.git_gutter',
    },
    {
      foreground: 'ec5f67',
      token: 'entity.name.module.js',
    },
    {
      foreground: 'ec5f67',
      token: 'variable.import.parameter.js',
    },
    {
      foreground: 'ec5f67',
      token: 'variable.other.class.js',
    },
    {
      foreground: 'ec5f67',
      fontStyle: 'italic',
      token: 'variable.language',
    },
    {
      foreground: 'cdd3de',
      token: 'meta.group.braces.curly.js constant.other.object.key.js string.unquoted.label.js',
    },
    {
      foreground: 'd8dee9',
      token: 'meta.class-method.js entity.name.function.js',
    },
    {
      foreground: 'd8dee9',
      token: 'variable.function.constructor',
    },
    {
      foreground: 'd8dee9',
      token: 'meta.class.js meta.class.property.js meta.method.js string.unquoted.js entity.name.function.js',
    },
    {
      foreground: 'bb80b3',
      token: 'entity.other.attribute-name',
    },
    {
      foreground: '99c794',
      token: 'markup.inserted',
    },
    {
      foreground: 'ec5f67',
      token: 'markup.deleted',
    },
    {
      foreground: 'bb80b3',
      token: 'markup.changed',
    },
    {
      foreground: '5fb3b3',
      token: 'string.regexp',
    },
    {
      foreground: '5fb3b3',
      token: 'constant.character.escape',
    },
    {
      fontStyle: 'underline',
      token: '*url*',
    },
    {
      fontStyle: 'underline',
      token: '*link*',
    },
    {
      fontStyle: 'underline',
      token: '*uri*',
    },
    {
      foreground: 'ab7967',
      token: 'constant.numeric.line-number.find-in-files - match',
    },
    {
      foreground: '99c794',
      token: 'entity.name.filename.find-in-files',
    },
    {
      foreground: '6699cc',
      fontStyle: 'italic',
      token: 'tag.decorator.js entity.name.tag.js',
    },
    {
      foreground: '6699cc',
      fontStyle: 'italic',
      token: 'tag.decorator.js punctuation.definition.tag.js',
    },
    {
      foreground: 'ec5f67',
      fontStyle: 'italic',
      token: 'source.js constant.other.object.key.js string.unquoted.label.js',
    },
    {
      foreground: 'fac863',
      token:
        'source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: 'fac863',
      token:
        'source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string',
    },
    {
      foreground: 'c594c5',
      token:
        'source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: 'c594c5',
      token:
        'source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string',
    },
    {
      foreground: 'd8dee9',
      token:
        'source.json meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: 'd8dee9',
      token:
        'source.json meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string',
    },
    {
      foreground: '6699cc',
      token:
        'source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: '6699cc',
      token:
        'source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string',
    },
    {
      foreground: 'ab7967',
      token:
        'source.json meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: 'ab7967',
      token:
        'source.json meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string',
    },
    {
      foreground: 'ec5f67',
      token:
        'source.json meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: 'ec5f67',
      token:
        'source.json meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string',
    },
    {
      foreground: 'f99157',
      token:
        'source.json meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: 'f99157',
      token:
        'source.json meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string',
    },
    {
      foreground: 'fac863',
      token:
        'source.json meta meta.structure.dictionary.json string.quoted.double.json - meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: 'fac863',
      token:
        'source.json meta meta.structure.dictionary.json punctuation.definition.string - meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string',
    },
    {
      foreground: 'c594c5',
      token:
        'source.json meta.structure.dictionary.json string.quoted.double.json - meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: 'c594c5',
      token:
        'source.json meta.structure.dictionary.json punctuation.definition.string - meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string',
    },
  ],
  colors: {
    'editor.foreground': Color.Base07,
    'editor.background': Color.Base00,
    'editor.selectionBackground': Color.Base02,
    'editor.lineHighlightBackground': Color.Base00,
    'editorCursor.foreground': Color.Base06,
    'editorWhitespace.foreground': Color.Base06,
    'editorIndentGuide.background': '#65737F',
    'editorIndentGuide.activeBackground': Color.Yellow,
  },
};
