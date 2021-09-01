module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-extra-boolean-cast': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'linebreak-style': 'off',
  },
  ignorePatterns: ['node_modules'],
};
