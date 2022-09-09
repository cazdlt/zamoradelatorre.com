import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md'],
			smartypants: true,
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
			layout:{
				"article":"./src/lib/components/postLayouts/article.svelte"
			}
		})
	],

	kit: {
		adapter: adapter(),
	},
};

export default config;
