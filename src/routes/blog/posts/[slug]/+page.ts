import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async ({ params }) => {
	const Post = await import(`../${params.slug}.md`);
	const metadata = Post.metadata;
	const Component = Post.default;

	return {
		Component,
		metadata
	};
};
