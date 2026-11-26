import { json } from '@sveltejs/kit';
import type { RequestHandler, RequestEvent } from './$types';
import { about } from '#lib/data/about.ts';

export const GET: RequestHandler = (_event: RequestEvent) => {
	const frase = about.frases[Math.floor(Math.random() * about.frases.length)];
	return json({ frase });
};
