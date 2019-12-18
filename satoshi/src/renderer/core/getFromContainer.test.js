import getFromContainer from './getFromContainer';
jest.mock('./getFromContainer');

describe('a mock of getFromContainer', () => {
  it('should return 42', () => {
    getFromContainer.mockImplementation(() => 42);
    expect(getFromContainer()).toBe(42);
  });
  it('should be a jest.fn', () => {
    const mockFn = jest.fn((x) => x * 2);
    getFromContainer.mockImplementation(mockFn);
    expect(getFromContainer(2)).toBe(4);
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith(2);
  });
});
