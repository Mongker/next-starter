import React, { ReactNode } from 'react';
import IdThreadProvider from 'components/ContextProvider/IdThreadProvider';
import Header from './Header';
import Footer from './Footer';
import ContentDetail from './ContentDetail';

interface Interface {
  id: string;
  children: ReactNode;
}

export default function Layout({ children, id }: Interface): JSX.Element {
  return (
    <IdThreadProvider id={id}>
      <Header />
      <ContentDetail>{children}</ContentDetail>
      <Footer />
    </IdThreadProvider>
  );
}
