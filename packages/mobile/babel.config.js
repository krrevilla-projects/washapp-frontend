module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@mobile/containers': './src/containers',
          '@mobile/config': './src/config',
          '@mobile/utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
