module.exports = {
  "parser": '@typescript-eslint/parser',
  "extends": [
    '@groove-labs/eslint-config-groove',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  "plugins": [
    '@typescript-eslint'
  ],
  "rules": {
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/camelcase': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    'import/no-unresolved': 'off',
  },
};
