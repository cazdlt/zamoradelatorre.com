import { json } from '@sveltejs/kit';
import type { RequestHandler, RequestEvent } from './$types';
import * as _ from 'lodash-es';
import { about } from '$lib/data/about';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET: RequestHandler = (_event: RequestEvent) => {
	const body = { frase: _.shuffle(about.frases)[0] };
	const response = json(body);
	return response;
};
