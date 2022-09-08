import type { PostMetadata, Post, MarkdownPost } from '$lib/types/post';

type postGlobFiles = {
	[key: string]: () => Promise<unknown>;
};

export const resolvePostFiles = async (allPostFiles: postGlobFiles) => {
	const allPosts = await Promise.all(
		Object.entries(allPostFiles).map(async ([path, resolver]) => {
			// eslint-disable-next-line
			// @ts-ignore
			const { metadata }: { metadata: PostMetadata } = await resolver();
			const pathList = path.split('/');
			const [postFile] = pathList.slice(-1)[0].split('.');
			const postBasePath = '/post/';
			const { type: postType } = metadata;

			const post: Post = {
				path: postBasePath + postType + '/' + postFile,
				...metadata,
				date: new Date(metadata.date)
			};

			return post;
		})
	);

	const sortedPosts = allPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
	return sortedPosts;
};

export const getAllProjects = async () => {
	const allPosts = await getAllPosts();
	const allProjects = allPosts.filter((p) => p.type == 'projects');
	return { projects: allProjects };
};

export const getAllBlogPosts = async () => {
	const allPosts = await getAllPosts();
	const allBlogs = allPosts.filter((p) => p.type == 'blog');
	return { blog: allBlogs };
};

export const getAllPosts = async (): Promise<Post[]> => {
	const postFiles = import.meta.glob('../data/posts/*.md');
	const allPosts = await resolvePostFiles(postFiles);
	return allPosts;
};

export const parseMarkdownPost = async (markdownPost: MarkdownPost) => {
	const metadata: PostMetadata = markdownPost.metadata;
	const Component = markdownPost.default;

	return {
		Component,
		metadata: {
			...metadata,
			date: new Date(metadata.date)
		}
	};
};
