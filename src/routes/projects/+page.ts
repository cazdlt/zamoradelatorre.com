import { resolvePostFiles } from '$lib/utils/pages';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const allPostFiles = import.meta.glob('/src/routes/projects/posts/*.md');
	const allPosts = await resolvePostFiles(allPostFiles);
	return { projects: allPosts };
};
