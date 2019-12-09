module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: './src',
        alias: {
          styles: './src/styles',
          modules: './src/modules',
          assets: './src/assets',
        },
      },
    ],
  ],
};
