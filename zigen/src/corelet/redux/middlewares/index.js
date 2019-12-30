import { applyMiddleware } from 'redux';
import ipcMiddleware from './ipcMiddleware';
import synthMiddleware from './synthMiddleware';

const middlewares = applyMiddleware(ipcMiddleware, synthMiddleware);

export default middlewares;
