import { getAllPosts } from '$lib/utils/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const allPosts = await getAllPosts();
	return {posts: allPosts};
};
