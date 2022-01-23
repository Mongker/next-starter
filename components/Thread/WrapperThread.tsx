import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Profile from 'components/Thread/Profile';
const NewsRelated = dynamic(import('components/Thread/NewsRelated/NewsRelated'), { ssr: false });
const NewsOther = dynamic(import('components/Thread/NewsOther'), { ssr: false });

interface Interface {
  children: ReactNode | null;
}

export default function WrapperThread(/* { children }: Interface */): JSX.Element {
  return (
    <React.Fragment>
      <div className={'controller flex'}>
        <Profile />
        <NewsRelated />
        <NewsOther />
      </div>
      <style jsx>{`
        .controller {
          flex-direction: column;
          background-color: white;
          border-radius: 10px;
          padding: 16px 12px;
        }
      `}</style>
    </React.Fragment>
  );
}
