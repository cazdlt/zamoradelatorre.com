import type { PageDefinition } from '$lib/types/site';
import type { Site } from '$lib/types/site';

export const site: Site = {
	author: {
		name: 'Andrés Zamora',
		fullName: 'Camilo Andrés Zamora de la Torre',
		email: 'cazdlt@gmail.com',
		socials: {
			lastfm: 'cazdlt',
			spotify: 'cazdlt',
			github: 'cazdlt',
			linkedin: 'cazdlt',
			mail: 'cazdlt'
		},
		phone: '(+57) 318 560 8181',
		location: 'Bogotá, Colombia'
	}
};

export const pages: PageDefinition[] = [
	{
		title: 'home',
		path: '/',
		mainSidebar: true
	},
	{
		title: 'blog',
		path: '/blog',
		mainSidebar: true,
		home: {
			img: '/img/home/cocuy.jpg',
			description: 'PNN El Cocuy'
		}
	},
	{
		title: 'projects',
		path: '/projects',
		mainSidebar: true,
		home: {
			img: '/img/home/canaletal.jpg',
			description: 'Canaletal, Bolívar'
		}
	},
	{
		title: 'about',
		path: '/about',
		mainSidebar: true,
		home: {
			img: '/img/home/iglesia.jpg',
			description: 'Canaletal, Bolívar'
		}
	},
	{
		title: 'contact',
		path: '/contact',
		mainSidebar: true,
		home: {
			img: '/img/home/norosi.jpg',
			description: 'Norosí, Bolívar'
		}
	},
	{
		title: 'archive',
		path: '/archive',
		mainSidebar: false,
		onlyShowIn: ['/tags', '/blog', '/projects', '/post']
	},

	{
		title: 'tags',
		path: '/tags',
		onlyShowIn: ['/archive', '/blog', '/projects', '/post'],
		mainSidebar: false
	}
];
