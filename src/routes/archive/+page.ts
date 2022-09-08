import { getAllPosts } from '$lib/utils/pages';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const allPosts = await getAllPosts();
	return {posts: allPosts};
};
