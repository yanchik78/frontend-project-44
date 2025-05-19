// eslint.config.js
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    rules: {
      // Основные правила
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'eol-last': ['error', 'always'],

      // Дополнительные правила
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'never'],

      // Правила для ES6+
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'prefer-const': 'error'
    }
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**'
    ]
  }
]
