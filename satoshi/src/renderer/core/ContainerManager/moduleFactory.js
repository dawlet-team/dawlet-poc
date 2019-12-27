// @flow
import { Score } from '../../score/Score';
import { IdFactory } from '../IdFactory';

export const moduleFactory = (): Array<ClassInstance> => {
  return [new Score(), new IdFactory()];
};
