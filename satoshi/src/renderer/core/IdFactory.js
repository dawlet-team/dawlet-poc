// @flow
declare interface IIdFactory {
  make(): number;
}

export class IdFactory implements IIdFactory {
  current: number;
  constructor(initialValue: number = 0) {
    this.current = initialValue;
  }
  make() {
    return this.current++;
  }
}
