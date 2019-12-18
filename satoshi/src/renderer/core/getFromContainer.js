// @flow
import { factory } from './factory';
import { Container } from './Container';

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
