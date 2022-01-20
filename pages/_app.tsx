import React from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { wrapper } from 'core/store';

// styles
import 'styles/index.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
