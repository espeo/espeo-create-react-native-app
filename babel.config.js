module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
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
};
