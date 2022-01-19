import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NextPage } from 'next';
import { startClock, tickClock } from 'core/actions';
import { wrapper } from 'core/store';
import { selectData } from 'core/selectors/examples/selecterData';
import Clock from 'components/examples/Clock';

const Index: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  });

  const { lastUpdate, light } = useSelector(selectData);

  return <Clock lastUpdate={lastUpdate} light={light} />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false));
});

export default Index;
