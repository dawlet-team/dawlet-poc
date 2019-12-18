// @flow
/**
 * DI Container
 * Container class should not be used via `getFromContainer` function.
 * */
export class Container {
  _instances: { [key: ClassName]: ClassInstance };
  constructor() {
    this._instances = {};
  }
  register(someInstance: ClassInstance): void {
    this._instances[someInstance.constructor.name] = someInstance;
  }
  get(SomeClass: ClassConstructor): ClassInstance {
    return this._instances[SomeClass.name];
  }
}
