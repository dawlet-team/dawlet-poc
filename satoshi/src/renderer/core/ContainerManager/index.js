// @flow
import { Container } from '../Container';
import { moduleFactory } from './moduleFactory';

export class ContainerManager {
  _container: Container;

  initContainer() {
    this._container = new Container();
    this.registerInstances();
  }
  registerInstances(): void {
    moduleFactory().forEach((instance: ClassInstance) => {
      this._container.register(instance);
    });
  }
  getContainer(): Container {
    if (!this._container)
      throw new Error('Run initContainer before getContainer');
    return this._container;
  }
  composeGetFromContainer(): GetFromContainer {
    if (!this._container)
      throw new Error('Run initContainer before composeGetFromContainer');
    return <T>(SomeClass: Class<T>): T => {
      return this._container.get(SomeClass);
    };
  }
}

const initContainerManager = (): ContainerManager => {
  const containerManager = new ContainerManager();
  containerManager.initContainer();
  return containerManager;
};

export const containerManager = initContainerManager();
