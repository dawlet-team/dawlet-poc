import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import reducers from './modules';
import middlewares from './middlewares';

let enhancer;
if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
  enhancer = compose(middlewares);
}

const createStore = () => {
  const store = _createStore(reducers, {}, enhancer);
  return store;
};

export default createStore;
