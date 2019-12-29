import ipcMiddleware from './ipcMiddleware';
import { applyMiddleware } from 'redux';

const middlewares = applyMiddleware(ipcMiddleware);

export default middlewares;
