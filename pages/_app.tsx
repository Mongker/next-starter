import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { wrapper } from '../core/store';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
