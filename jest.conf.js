const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest"
  },
  transformIgnorePatterns: [
    '<rootDir>/src/node_modules/lit-*'
  ],
  testPathIgnorePatterns: ['**/+(test).+(ts)'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/angular-starter',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  setupFiles: ['/src/test.ts']
};