import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContentDetail from './ContentDetail';

interface Interface {
  children: ReactNode;
}

export default function Layout({ children }: Interface): JSX.Element {
  return (
    <React.Fragment>
      <Header />
      <ContentDetail>{children}</ContentDetail>
      <Footer />
    </React.Fragment>
  );
}
