import { Config } from '@jest/types'

const jestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  moduleDirectories: ['./src', 'node_modules'],
  transform: {
    '^.+\\.(t|j)s?$': 'ts-jest',
  },
  testRegex: '/tests/.*(spec|test)\\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
}

export default jestConfig
