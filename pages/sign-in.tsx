import { FC } from 'react';
import { Menu } from '../components/Domain/Menu';
import { SignInForm } from '../components/Domain/SignInForm';

const SignInPage: FC = () => {
  return (
    <div>
      <h1>Sign-in</h1>
      <Menu />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
