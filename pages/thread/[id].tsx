import React from 'react';
import { NextPage } from 'next';
import { wrapper } from '@core/store';
import { getDataEntryDetail } from '@core/actions';
import { END } from 'redux-saga';

const ThreadDetail: NextPage = () => {
  return <React.Fragment>DEMO</React.Fragment>;
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().Entry) {
    store.dispatch(getDataEntryDetail());
    store.dispatch(END);
  }
  await store.sagaTask?.toPromise();
});

export default ThreadDetail;
