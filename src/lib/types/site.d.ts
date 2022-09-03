export type Site = {
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