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