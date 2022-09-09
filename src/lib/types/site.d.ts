export type Site = {
	author: {
		name: string;
		fullName: string;
		job?: string;
		email: string;
		phone?: string;
		socials: {
			[key: string]: string;
		};
	};
};