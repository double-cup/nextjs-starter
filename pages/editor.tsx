import { FC } from 'react';
import { Code } from '../components/Domain/Code';
import { Menu } from '../components/Domain/Menu';

const EditorPage: FC = () => {
  return (
    <div>
      <h1>Welcome to editor!</h1>
      <Menu />
      <Code />
    </div>
  );
};

export default EditorPage;
