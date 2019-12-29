// @flow
import { Constant, Expression } from '../Attribute';

test('instanciates constant', () => {
  const attribute = new Constant(3);
  expect(attribute).toBeInstanceOf(Constant);
  expect(attribute.value).toBe(3);
});
test('instanciates expression', () => {
  const attribute = new Expression('1+1');
  expect(attribute).toBeInstanceOf(Expression);
  expect(attribute.value).toBe(2);
});
