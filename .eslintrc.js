module.exports = {
  // environments script is design to run in
  env: {
    commonjs: true,
    jest: true,
    es2021: true,
  },
  extends: [
    // recommended config according to [link](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs)
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    // Airbnb style for typwscript without react support
    'airbnb-typescript/base',

    // Jest
    'plugin:jest/recommended',

    /**
     * Prettier-related extends should always be
     * [last](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration).
     */
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
