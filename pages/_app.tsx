import 'modern-normalize/modern-normalize.css';
import type { AppProps } from 'next/app';
import { FC, Fragment } from 'react';
import { Menu } from '../components/Domain/Menu';
import { AppBody } from '../components/Layout/AppBody';
import { AppFooter } from '../components/Layout/AppFooter';
import { AppHeader } from '../components/Layout/AppHeader';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <AppHeader>
        <Menu />
      </AppHeader>
      <AppBody>
        <Component {...pageProps} />
      </AppBody>
      <AppFooter />
    </Fragment>
  );
};

export default MyApp;
