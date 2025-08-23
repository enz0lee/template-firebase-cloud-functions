import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import nodePlugin from 'eslint-plugin-node'
import prettier from 'eslint-plugin-prettier'
import promisePlugin from 'eslint-plugin-promise'

export default [
  // Base JavaScript recommended rules
  js.configs.recommended,
  // Prettier config to disable conflicting rules
  prettierConfig,

  // TypeScript files configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        // Node.js globals including fetch
        fetch: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        URLSearchParams: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      import: importPlugin,
      node: nodePlugin,
      prettier: prettier,
      promise: promisePlugin,
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // Import rules
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'off', // TypeScript handles this
      'import/no-extraneous-dependencies': 'error',

      // Node.js rules
      'node/no-unsupported-features/es-syntax': 'off', // TypeScript handles this
      'node/no-missing-import': 'off', // TypeScript handles this
      'node/no-unsupported-features/node-builtins': 'off', // This allows fetch and other Node.js globals

      // Promise rules
      'promise/always-return': 'error',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',
      'promise/catch-or-return': 'error',
      'promise/no-new-statics': 'error',
      'promise/no-return-in-finally': 'error',
      'promise/valid-params': 'error',

      // Prettier rules
      'prettier/prettier': 'error',

      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },

  // JavaScript files configuration (for any .js files)
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        // Node.js globals including fetch
        fetch: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        URLSearchParams: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
      node: nodePlugin,
      prettier: prettier,
      promise: promisePlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'prettier/prettier': 'error',

      // Node.js rules
      'node/no-unsupported-features/node-builtins': 'off', // This allows fetch and other Node.js globals
    },
  },

  // Configuration files
  {
    files: ['*.config.js', '*.config.mjs', '*.config.ts'],
    rules: {
      'no-console': 'off',
    },
  },

  // Ignore patterns
  {
    ignores: ['node_modules/**', 'coverage/**', 'dist/**', 'build/**'],
  },
]
