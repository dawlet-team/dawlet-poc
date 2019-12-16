// @flow
import * as AttributeModes from '../../constants/attribute-modes';

declare type OneOfAttributeModes = $Values<typeof AttributeModes>;

declare interface IAttribute<T: AttributeValue> {
  mode: OneOfAttributeModes;
  expression?: string;
  value: ?T;
}

declare interface Constant<T: AttributeValue> {
  value: T;
}

declare interface Expression<T: AttributeValue> {
  code: string;
  +value: T;
}
