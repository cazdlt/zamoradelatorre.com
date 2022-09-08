import { parseMarkdownPost } from '$lib/utils/pages';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const markdownPost = await import(`../../../../lib/data/posts/${params.slug}.md`);
	const post = await parseMarkdownPost(markdownPost)
	return post
};
