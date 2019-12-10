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
        },
      },
    ],
  ],
};
