import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      typescriptPlugin,
    },
    ignores: ['.*.mjs', 'node_modules/', 'dist/'],
  },
];
