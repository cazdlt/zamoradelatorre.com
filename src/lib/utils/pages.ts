import type { PostMetadata, Post } from '$lib/types/post';

type postGlobFiles = {
	[key: string]: () => Promise<unknown>;
};
export const resolvePostFiles = async (allPostFiles: postGlobFiles) => {
	const allPosts = await Promise.all(
		Object.entries(allPostFiles).map(async ([path, resolver]) => {
			const { metadata }: { metadata: PostMetadata } = await resolver();
			const postPath = path.slice(11, -3);

			const post: Post = {
				path: postPath,
				...metadata,
				date: new Date(metadata.date)
			};

			return post;
		})
	);

	const sortedPosts = allPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
	return sortedPosts;
};
