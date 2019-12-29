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
  get values(): T[] {
    return Object.keys(this.data).map((key) => this.data[Number(key)]);
  }
}
