import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

const noUnusedVars = {
	'no-unused-vars': 'off',
	'@typescript-eslint/no-unused-vars': [
		'error',
		{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
	]
};

export default [
	{
		ignores: [
			'**/.DS_Store',
			'**/node_modules/**',
			'**/build/**',
			'**/.svelte-kit/**',
			'**/.netlify/**',
			'**/package/**',
			'**/.env*',
			'**/*.lock',
			'**/static/**'
		]
	},
	js.configs.recommended,
	...svelte.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 'latest'
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			...noUnusedVars
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				sourceType: 'module',
				ecmaVersion: 'latest'
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...noUnusedVars,
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	prettier,
	...svelte.configs.prettier
];
