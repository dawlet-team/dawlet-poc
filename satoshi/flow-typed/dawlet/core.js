import * as AttributeModes from '../../constants/attribute-modes';

declare interface IAttribute<T> {
  mode: $Values<typeof AttributeModes>;
  expression?: string;
  value: T;
}
