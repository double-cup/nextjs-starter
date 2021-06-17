import { FC, Fragment, ReactNode } from 'react';

interface AppHeaderProps {
  children?: ReactNode;
}

export const AppHeader: FC<AppHeaderProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
