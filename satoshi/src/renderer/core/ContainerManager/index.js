// @flow
import { Container } from '../Container';
import { moduleFactory } from './moduleFactory';

export class ContainerManager implements IContainerManager {
  _container: Container;

  initContainer(): void {
    this._container = new Container();
    this.registerInstances();
  }
  registerInstances(): void {
    moduleFactory().forEach((instance: ClassInstance) => {
      this._container.register(instance);
    });
  }
  setContainer(container: Container) {
    this._container = container;
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

const initContainerManager = (): IContainerManager => {
  const containerManager = new ContainerManager();
  containerManager.initContainer();
  return containerManager;
};

export const containerManager = initContainerManager();
