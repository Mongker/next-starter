import React from 'react';
import NewsGeneral from '../Thread/NewsGeneral';

export default function ContentRight(): JSX.Element {
  return (
    <React.Fragment>
      <div className={'vnr_container_right'}>
        <NewsGeneral />
      </div>
      {/* @ts-ignore */}
      <style jsx>{`
        .vnr_container_right {
          margin-left: 10px;
          transition: all 1s linear;
          width: 324px;
          height: 100%; // Để tạm
        }
      `}</style>
    </React.Fragment>
  );
}
