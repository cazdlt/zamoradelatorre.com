import type { ComponentType } from 'svelte';

export interface PostMetadata {
	title: string;
	date: Date;
	description: string;
	thumbnail?: string;
	tags?: string[];
	type: 'projects' | 'blog';
	layout: "article" | "microreviews"
}

export interface Post extends PostMetadata {
	path: string;
}

export interface MarkdownPost {
	metadata: PostMetadata;
	default: ComponentType;
}
