import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import reducers from './modules';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

let enhancer;
if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
  enhancer = compose(applyMiddleware(logger));
}

const createStore = () => {
  const store = _createStore(reducers, {}, enhancer);
  return store;
};

export default createStore;
