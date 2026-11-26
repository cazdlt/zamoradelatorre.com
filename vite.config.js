import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-netlify';
import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import { anchors } from '@mdsvex/plugin-anchors';
import preprocess from 'svelte-preprocess';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		mdsvex({
			extensions: ['.md'],
			smart_punctuation: true,
			heading_ids: true,
			plugins: [
				anchors({
					position: 'prepend',
					attrs: { class: 'icon icon-link' }
				})
			]
		}),
		sveltekit({
			preprocess: [
				preprocess({
					postcss: {
						plugins: [postcssImport(), postcssNested()]
					}
				})
			],
			adapter: adapter({
				split: true,
				edge: false
			})
		})
	]
});
