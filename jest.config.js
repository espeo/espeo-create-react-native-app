module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@core/(.*)': '<rootDir>/src/app/$1',
    '^@assets/(.*)': '<rootDir>/src/app/assets/$1',
    '^@pages/(.*)': '<rootDir>/src/app/pages/$1',
    '^@store/(.*)': '<rootDir>/src/app/store/$1',
    '^@styles/(.*)': '<rootDir>/src/app/styles/$1',
    '^@common/(.*)': '<rootDir>/src/app/common/$1',
    '^@namespace/(.*)': '<rootDir>/src/app/namespace/$1',
    '^@services/(.*)': '<rootDir>/src/app/services/$1',
    '^@helpers/(.*)': '<rootDir>/src/app/helpers/$1',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      diagnostics: false,
    },
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  transformIgnorePatterns: [
    '/node_modules/(?!react-native|react-native|react-native-i118n|@react-navigation|react-navigation|react-native-gesture-handler|react-navigation-stack|@react-native-community|@react-native-community/async-storage/lib|react-native-localize/.*)',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/jest', 'assets', 'lib'],
  modulePathIgnorePatterns: ['package', 'assets', 'lib'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
};
