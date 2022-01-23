import React, { ReactNode } from 'react';
import ContentRight from 'components/Layout/ContentRight';

export default function ContentDetail({ children }: { children: ReactNode }): JSX.Element {
  return (
    <React.Fragment>
      <div className={'controller'}>
        <div className={'controller controller_center'}>
          <div className={'vnr_container_left'} />
          <div className={'vnr_container_mid'}> {children}</div>
          <ContentRight />
        </div>
      </div>
      {/* @ts-ignore */}
      <style jsx>{`
        .controller {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .controller_center {
          margin-top: 20px;
          position: relative;
        }

        .vnr_container_left {
          height: 100%;
          left: -193px;
          position: absolute;
          width: 184px;
          background-color: transparent; // Để tạm
        }

        .vnr_container_mid {
          width: 752px;
        }
      `}</style>
    </React.Fragment>
  );
}
