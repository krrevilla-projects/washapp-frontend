module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['simple-import-sort', '@typescript-eslint'],
  rules: {
    'simple-import-sort/imports': 'error',
    'no-console': 'error',
  },
};
