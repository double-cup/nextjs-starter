import { FC, Fragment, ReactNode } from 'react';

interface AppFooterProps {
  children?: ReactNode;
}

export const AppFooter: FC<AppFooterProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
