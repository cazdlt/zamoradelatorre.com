import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-netlify';
import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import { anchors } from '@mdsvex/plugin-anchors';
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
			preprocess: vitePreprocess(),
			adapter: adapter({
				split: true,
				edge: false,
				nodeVersion: 'nodejs24.x'
			})
		})
	]
});
