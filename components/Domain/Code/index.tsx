import Editor from '@monaco-editor/react';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { monacoTheme, prismTheme } from '../../../misc/theme';
import { Field } from '../Field';

const initialSchema = {
  firstname: {
    type: 'text',
    label: 'Firstname',
  },
  lastname: {
    type: 'text',
    label: 'Lastname',
  },
};

const initialModel = {
  firstname: 'Julien',
  lastname: 'Andreu',
};

const initialCode = `
<div>
    Hello {firstname} {lastname}!
</div>
`;

export const Code: FC = () => {
  const [schema, setSchema] = useState(initialSchema);
  const [model, setModel] = useState(initialModel);
  const [code, setCode] = useState(initialCode.trim());
  const [output, setOutput] = useState('');
  const finalRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setOutput(finalRef?.current?.children[0]?.innerHTML);
    }, 250);
  }, [finalRef, schema, model, code]);

  return (
    <Fragment>
      <h2>Schema</h2>
      <Editor
        height="300px"
        language="json"
        value={JSON.stringify(schema, null, 2)}
        onChange={(value) => {
          setSchema(JSON.parse(value ?? '{}'));
        }}
        onMount={(editor, monaco) => {
          editor.updateOptions({
            fontFamily: 'Fira Code',
            fontSize: 16,
            lineHeight: 22,
            lineNumbers: 'off',
            glyphMargin: false,
            folding: false,
          });

          monaco.editor.defineTheme('oceanic', monacoTheme);
          monaco.editor.setTheme('oceanic');
        }}
        options={{
          minimap: {
            enabled: false,
          },
          autoIndent: true,
          fontLigatures: true,
        }}
      />
      <hr />
      <h2>Form</h2>
      {Object.entries(schema).map(([key, { label, type }]) => (
        <Field
          key={key}
          type={type}
          label={label}
          onChange={(value) => {
            setModel({
              ...model,
              [key]: value,
            });
          }}
        />
      ))}
      <hr />
      <h2>Model</h2>
      <Editor
        height="300px"
        language="json"
        value={JSON.stringify(model, null, 2)}
        onChange={(value) => {
          setModel(JSON.parse(value ?? '{}'));
        }}
        onMount={(editor, monaco) => {
          editor.updateOptions({
            fontFamily: 'Fira Code',
            fontSize: 16,
            lineHeight: 22,
            lineNumbers: 'off',
            glyphMargin: false,
            folding: false,
          });

          monaco.editor.defineTheme('oceanic', monacoTheme);
          monaco.editor.setTheme('oceanic');
        }}
        options={{
          minimap: {
            enabled: false,
          },
          autoIndent: true,
          fontLigatures: true,
        }}
      />
      <hr />
      <h2>Block</h2>
      <LiveProvider
        code={code}
        scope={{
          ...model,
        }}
        theme={prismTheme}
        language={'jsx'}
      >
        <LiveEditor
          style={{
            font: "16px / 22px 'Fira Code', monospace",
          }}
          onChange={(editorCode) => {
            setCode(editorCode);
          }}
        />
        <LiveError />
        <div ref={finalRef}>
          <LivePreview />
        </div>
      </LiveProvider>
      <hr />
      <h2>Output</h2>
      <pre>{output}</pre>
    </Fragment>
  );
};
