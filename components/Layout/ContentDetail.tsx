import React, { ReactNode } from 'react';

export default function ContentDetail({ children }: { children: ReactNode }): JSX.Element {
  return (
    <React.Fragment>
      <div className={'controller'}>
        <div className={'controller controller_center'}>
          <div className={'vnr_container_left'} />
          <div className={'vnr_container_mid'}> {children}</div>
          <div className={'vnr_container_right'} />
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
          background-color: #1b5364; // Để tạm
        }

        .vnr_container_mid {
          width: 752px;
        }

        .vnr_container_right {
          margin-left: 10px;
          transition: all 1s linear;
          width: 324px;
          height: 100%; // Để tạm
          background-color: red; // Để tạm
        }
      `}</style>
    </React.Fragment>
  );
}
