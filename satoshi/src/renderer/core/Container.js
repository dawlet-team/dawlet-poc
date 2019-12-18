// @flow

import { factory } from './factory';

/**
 * this export statement is for test purpose.
 * Container class should not be imported anywhere inside the application.
 * Use `getFromContainer` function.
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

const registerInstances = (container: Container): void => {
  factory().forEach((instance: ClassInstance) => {
    container.register(instance);
  });
};

const container = new Container();
registerInstances(container);

export const getFromContainer = <T>(SomeClass: Class<T>): T => {
  return container.get(SomeClass);
};

export default getFromContainer;
