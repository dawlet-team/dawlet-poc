module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ["/node_modules/", "lib", "__tests__/helpers"],
  setupFiles: ['./jest.setup.ts']
};