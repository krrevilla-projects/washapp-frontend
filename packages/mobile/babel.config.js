module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@mobile/assets/*': ['./src/assets/*'],
          '@mobile/components': ['./src/components'],
          '@mobile/config': ['./src/config'],
          '@mobile/containers': ['./src/containers'],
          '@mobile/hooks': ['./src/hooks'],
          '@mobile/styles': ['./src/styles'],
          '@mobile/utils': ['./src/utils'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
