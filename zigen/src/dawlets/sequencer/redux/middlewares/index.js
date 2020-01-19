import { applyMiddleware } from 'redux';
import ipcMiddleware from './ipcMiddleware';

const middlewares = applyMiddleware(ipcMiddleware);

export default middlewares;
