// @flow
import { Score } from '../score/Score';
import { IdFactory } from './modules/IdFactory';

export const factory = (): Array<ClassInstance> => {
  return [new Score(), new IdFactory()];
};
