import React from 'react';
import { NextPage } from 'next';
// import { END } from 'redux-saga';
// import { loadData } from 'core/actions';
import { wrapper } from 'core/store';
import ViewData from 'components/examples/ViewData';

const Index: NextPage = () => {
  return <ViewData title="Call dữ liệu tại server và đưa vào store của redux" />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  // MongLV: Rào tạm khi nào sử dụng thì mở ra để xem ví dụ
  // if (!store.getState().placeholderData) {
  //   store.dispatch(loadData());
  //   store.dispatch(END);
  // }
  // await store.sagaTask?.toPromise();
});

export default Index;
