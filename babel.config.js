module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@core': './app',
          '@styles': './src/app/styles',
          '@modules': './src/app/modules',
          '@assets': './src/app/assets',
          '@services': './src/app/services',
          '@namespace': './src/app/namespace',
          '@store': './src/app/store',
          '@common': './src/app/common',
        },
      },
    ],
  ],
};
