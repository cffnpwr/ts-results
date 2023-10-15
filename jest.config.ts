import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '/test/.*.test.ts',
  collectCoverageFrom: ['src/**/*.ts'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: 'test/tsconfig.json',
      },
    ],
  },
};

export default config;
