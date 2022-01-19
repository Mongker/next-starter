// eslint-disable-next-line import/named
import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
// eslint-disable-next-line import/named
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

import { AppState } from './interfaces';
import rootReducer from './reducers/reducer';
import rootSaga from './sagas/saga';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<AppState> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<AppState>(makeStore, { debug: true });
