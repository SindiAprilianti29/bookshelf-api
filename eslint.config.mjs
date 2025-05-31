// eslint.config.cjs
const js = require('@eslint/js');
const globals = require('globals');
const daStyle = require('eslint-config-dicodingacademy');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  js.configs.recommended,
  daStyle,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
]);
