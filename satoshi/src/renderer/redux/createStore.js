// @flow
import { createStore as _createStore, compose } from 'redux';
import { middlewares } from './middleware';
import { reducers } from './modules';

let enhancer;
if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
  enhancer = compose(middlewares);
}

export const createStore = () => {
  const store = _createStore(reducers, {}, enhancer);
  return store;
};
