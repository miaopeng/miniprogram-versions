module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    node: true,
    es6: true
  },
  globals: {},
  rules: {
    camelcase: 0,
    'global-require': 0,
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-console': 0,
    'no-restricted-globals': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { varsIgnorePattern: 'regeneratorRuntime' }],
    'import/no-unresolved': [2, { ignore: ['^@/'] }],
    'import/no-extraneous-dependencies': [2, { optionalDependencies: true }],
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'no-plusplus': 0
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url']
  }
};
