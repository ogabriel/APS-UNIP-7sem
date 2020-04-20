module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['server.js'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['db/migrations/*.js'],
      rules: {
        'no-unused-vars': ['error', {argsIgnorePattern: 'Sequelize'}]
      },
    },
  ],
};
