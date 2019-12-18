// @flow
import { Container } from './Container';

describe('Container', () => {
  it('registers class instance', () => {
    const container = new Container();
    class MockClass {}
    const mockInstance = new MockClass();
    container.register(mockInstance);
    expect(container._instances).toHaveProperty('MockClass');
    expect(container._instances.MockClass).toBe(mockInstance);
    expect(container._instances.MockClass).toEqual(mockInstance);
  });
  it('gets mock instance', () => {
    const container = new Container();
    class MockClass {}
    const mockInstance = new MockClass();
    container.register(mockInstance);
    expect(container.get(MockClass)).toBe(mockInstance);
    expect(container.get(MockClass)).toEqual(mockInstance);
  });
});
