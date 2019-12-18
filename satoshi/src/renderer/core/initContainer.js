// @flow
import { Container } from './Container';
import { factory } from './factory';

const registerInstances = (container: Container): void => {
  factory().forEach((instance: ClassInstance) => {
    container.register(instance);
  });
};

export const initContainer = (): GetFromContainer => {
  const container = new Container();
  registerInstances(container);

  const getFromContainer = <T>(SomeClass: Class<T>): T => {
    return container.get(SomeClass);
  };
  return getFromContainer;
};

// alias to initContainer
export const composeGetFromContainer = (): GetFromContainer => initContainer();
