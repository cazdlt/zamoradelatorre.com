export type Site = {
	author: {
		name: string;
		fullName: string;
		job?: string;
		email: string;
		phone?: string;
		location?: string;
		socials: {
			[key: string]: string;
		};
	};
};

export type PageDefinition = {
	title: string;
	path: string;
	mainSidebar: boolean;
	onlyShowIn?: string[];
	home?: {
		img: string;
		description: string;
	};
};
