module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  testPathIgnorePatterns: ["/node_modules/", "lib"],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}']
};