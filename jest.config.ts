import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  ...createDefaultPreset(),
  verbose: true,
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
}

export default config;