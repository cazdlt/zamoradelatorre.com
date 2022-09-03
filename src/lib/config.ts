import type { PageDefinition } from '$lib/types/page';
import type { Site } from '$lib/types/site';

export const site: Site = {
	author: {
		name: 'Andrés Zamora',
		fullName: 'Camilo Andrés Zamora de la Torre',
		email: 'cazdlt@gmail.com',
		socials: {
			lastfm: 'cazdlt',
			spotify: 'cazdlt',
			twitter: 'cazdlt',
			github: 'cazdlt',
			linkedin: 'cazdlt',
			mail: 'cazdlt'
		}
	}
};

export const pages: PageDefinition[] = [
	{
		title: 'home',
		path: '/',
		level: 0
	},
	{
		title: 'blog',
		path: '/blog',
		level: 0
	},
	{
		title: 'projects',
		path: '/projects',
		level: 0
	},
	{
		title: 'about',
		path: '/about',
		level: 0
	},
	{
		title: 'contact',
		path: '/contact',
		level: 0
	},
	{
		title: 'archive',
		path: '/archive',
		level: 1,
		onlyShowIn: ["/tags", "/blog", "/projects"]
	},
	{
		title: 'tags',
		path: '/tags',
		onlyShowIn: ["/archive", "/blog", "/projects"],
		level: 1
	}
];
