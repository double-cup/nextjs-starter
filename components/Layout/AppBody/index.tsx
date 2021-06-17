import { FC, Fragment, ReactNode } from 'react';

interface AppBodyProps {
  children: ReactNode;
}

export const AppBody: FC<AppBodyProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
