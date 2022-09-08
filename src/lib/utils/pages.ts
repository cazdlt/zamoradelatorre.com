import type { PostMetadata, Post, MarkdownPost } from '$lib/types/post';

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

export const getAllProjects = async () => {
	const allProjectFiles = import.meta.glob('/src/routes/projects/posts/*.md');
	const allProjects = await resolvePostFiles(allProjectFiles);
	return { projects: allProjects };
};

export const getAllBlogPosts = async () => {
	const allBlogFiles = import.meta.glob('/src/routes/blog/posts/*.md');
	const allBlogs = await resolvePostFiles(allBlogFiles);
	return { blog: allBlogs };
};

export const getAllPosts = async () => {
	const blogs = await getAllBlogPosts();
	const projects = await getAllProjects();
	return { ...blogs, ...projects };
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