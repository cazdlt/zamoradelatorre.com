type Site = {
	author: {
		name: string;
		fullName: string;
		job?: string;
		email: string;
		socials: {
			[key: string]: string;
		};
	};
};

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
