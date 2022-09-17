import { getAllBlogPosts } from '$lib/utils/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const allPosts = await getAllBlogPosts();
	return allPosts;
};
