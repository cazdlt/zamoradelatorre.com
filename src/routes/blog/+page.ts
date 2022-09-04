import { getAllBlogPosts } from '$lib/utils/pages';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const allPosts = await getAllBlogPosts();
	return allPosts;
};