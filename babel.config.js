module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', { modules: 'commonjs' }],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@core': './src/app',
          '@styles': './src/app/styles',
          '@pages': './src/app/pages',
          '@assets': './src/app/assets',
          '@services': './src/app/services',
          '@namespace': './src/app/namespace',
          '@store': './src/app/store',
          '@common': './src/app/common',
          '@helpers': './src/app/helpers',
        },
      },
    ],
  ],
  env: {
    test: {
      presets: ['react-native', ['@babel/preset-env']],
    },
  },
};
