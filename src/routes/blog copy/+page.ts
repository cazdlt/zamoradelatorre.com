import { resolvePostFiles } from '$lib/utils/pages';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md');
	const allPosts = resolvePostFiles(allPostFiles);
	return { posts: allPosts };
};
