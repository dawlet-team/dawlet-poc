module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ["/node_modules/", "lib"],
  collectCoverage: true,
  transform: {
    '\\.xml$': "jest-raw-loader",
  },
  collectCoverageFrom: ['./src/**/*.ts']
};
