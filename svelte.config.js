import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: {
				plugins: [postcssImport(), postcssNested()]
			}
		}),
		mdsvex({
			extensions: ['.md'],
			smartypants: true,
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	kit: {
		adapter: adapter({
			split: true,
			edge: false
		})
	}
};

export default config;
