// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@aprets/config/patch/modern-name-resolution');

module.exports = {
  extends: ['./node_modules/@aprets/config/eslint/react'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-default-export': 'off',
    // disable for jsx props
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
  },
};
