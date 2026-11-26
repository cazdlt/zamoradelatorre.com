export type Locale = 'es' | 'en';

export type LocalizedText = Record<Locale, string>;

export type Site = {
	author: {
		name: string;
		fullName: string;
		job?: LocalizedText;
		email: string;
		phone?: string;
		whatsapp?: string;
		location?: string;
		socials: {
			[key: string]: string;
		};
	};
};

export type PageDefinition = {
	title: LocalizedText;
	path: string;
	mainSidebar: boolean;
	onlyShowIn?: string[];
	home?: {
		img: string;
		description: string;
	};
};
