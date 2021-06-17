module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'babel',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  // coverageThreshold: undefined,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['./node_modules/', '__tests__/(fixtures|__mocks__)/'],
  testMatch: ['**/__tests__/*.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  // timers: "real",
};
