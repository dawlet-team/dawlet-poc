// @flow
import { IdFactory } from './IdFactory';

test('generate ids', () => {
  const idFactory = new IdFactory();
  expect(idFactory.make()).toBe(0);
  expect(idFactory.make()).toBe(1);
  expect(idFactory.make()).toBe(2);
});
test('with initial value', () => {
  const idFactory = new IdFactory(4);
  expect(idFactory.make()).toBe(4);
  expect(idFactory.make()).toBe(5);
  expect(idFactory.make()).toBe(6);
});
