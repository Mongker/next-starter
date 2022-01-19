import React from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { wrapper } from 'core/store';
import 'antd/dist/antd.css';
// import 'SNWClient/app/vnReview/styles/main.less';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
