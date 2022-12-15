import { json } from '@sveltejs/kit';
import type { RequestHandler, RequestEvent } from './$types';
import * as _ from 'lodash-es';
import { about } from '$lib/data/about';

export const GET: RequestHandler = (_event: RequestEvent) => {
	const body = { frase: _.shuffle(about.frases)[0] };
	const response = json(body);
	return response;
};
