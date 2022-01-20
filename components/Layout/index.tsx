import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Interface {
  children: ReactNode;
}

export default function Layout({ children }: Interface): JSX.Element {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
