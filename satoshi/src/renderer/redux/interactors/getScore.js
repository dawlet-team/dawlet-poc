import { store } from '../store';

export const getScore = () => store.getState().score;
