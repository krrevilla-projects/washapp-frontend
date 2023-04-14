const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  staticDirs: [{ from: '../src/assets/fonts', to: 'fonts' }, { from: '../../../node_modules/react-native-vector-icons/Fonts', to: 'font-icons' }],
  babel: async options => ({
    ...options,
    presets: [
      ["@babel/preset-env", { shippedProposals: true }],
      "@babel/preset-typescript",
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
    plugins: ["@babel/plugin-transform-typescript", ...options.plugins],
  }),
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader',
      include: path.resolve(__dirname, "../../../node_modules/react-native-vector-icons/Fonts"),
    });

    return config
  },
};
