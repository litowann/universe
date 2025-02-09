import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
    {
        ignores: ['dist', 'build'],
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: tsParser,
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            'react-hooks': reactHooks,
        },
        linterOptions: {
            reportUnusedDisableDirectives: "error",
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            'no-unused-vars': 'warn',
            'semi': ['error', 'always'],
        },
    },
];
