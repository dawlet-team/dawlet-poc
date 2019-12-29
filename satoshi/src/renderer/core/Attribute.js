// @flow
export class Constant<T: AttributeValue> implements Attribute<T> {
  _value: T;
  constructor(input: T) {
    this._value = input;
  }
  get value(): T {
    return this._value;
  }
}

export class Expression<T: AttributeValue> implements Attribute<T> {
  _code: string;
  constructor(code: string) {
    this._code = code;
  }
  get value(): T {
    return (eval(this._code): T);
  }
  set value(input: mixed) {
    throw new Error(
      'cannot assign value directly because the attribute is the value of expression'
    );
  }
}
