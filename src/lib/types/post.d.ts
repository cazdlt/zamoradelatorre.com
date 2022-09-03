export interface PostMetadata {
	title: string;
	date: Date;
	description: string;
	thumbnail?: string;
	tags?: string[];
}

export interface Post extends PostMetadata {
	path: string;
}
