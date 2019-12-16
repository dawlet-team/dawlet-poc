// @flow
import { CONSTANT, EXPRESSION } from '../../../constants/attribute-modes';

export class Attribute<T: AttributeValue> implements IAttribute<T> {
  mode: OneOfAttributeModes = CONSTANT;
  _value: ?T;
  _expression: ?Expression<T>;

  get value(): ?T {
    if (this.mode === CONSTANT) {
      return this._value;
    }
    if (this.mode === EXPRESSION) {
      if (this._expression) {
        return this._expression.value;
      }
    }
    return undefined;
  }
  set value(input: ?T) {
    if (this.mode !== CONSTANT) {
      throw new Error(
        'cannot assign value directly because the attribute is the value of expression'
      );
    }
    this._value = input;
  }
}
