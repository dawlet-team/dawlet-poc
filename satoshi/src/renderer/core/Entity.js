// @flow
export class Entity<T> {
  data: { [key: number]: T };
  +length: number;
  constructor() {
    this.data = {};
  }
  get length(): number {
    return Object.keys(this.data).length;
  }
}
