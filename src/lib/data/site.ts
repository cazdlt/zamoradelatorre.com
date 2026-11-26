import type { PageDefinition, Site } from '#lib/types/site.d.ts';

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
		phone: '(+57) 318 560 8101',
		whatsapp: '573185608101',
		location: 'Bogotá, Colombia'
	}
};

export const cvLinks = [
	{ label: 'Resume (EN)', href: '/cv/resume.pdf' },
	{ label: 'Hoja de Vida (ES)', href: '/cv/hoja-de-vida.pdf' },
	{ label: 'Europass CV', href: '/cv/europass.pdf' }
] as const;

export const pages: PageDefinition[] = [
	{
		title: { en: 'home', es: 'inicio' },
		path: '/',
		mainSidebar: true
	},
	{
		title: { en: 'blog', es: 'blog' },
		path: '/blog',
		mainSidebar: true,
		home: {
			img: '/img/home/cocuy.jpg',
			description: 'PNN El Cocuy'
		}
	},
	{
		title: { en: 'projects', es: 'proyectos' },
		path: '/projects',
		mainSidebar: true,
		home: {
			img: '/img/home/canaletal.jpg',
			description: 'Canaletal, Bolívar'
		}
	},
	{
		title: { en: 'about', es: 'sobre mí' },
		path: '/about',
		mainSidebar: true,
		home: {
			img: '/img/home/iglesia.jpg',
			description: 'Canaletal, Bolívar'
		}
	},
	{
		title: { en: 'contact', es: 'contacto' },
		path: '/contact',
		mainSidebar: true,
		home: {
			img: '/img/home/norosi.jpg',
			description: 'Norosí, Bolívar'
		}
	},
	{
		title: { en: 'archive', es: 'archivo' },
		path: '/archive',
		mainSidebar: false,
		onlyShowIn: ['/tags', '/blog', '/projects', '/post']
	},
	{
		title: { en: 'tags', es: 'etiquetas' },
		path: '/tags',
		onlyShowIn: ['/archive', '/blog', '/projects', '/post'],
		mainSidebar: false
	}
];
