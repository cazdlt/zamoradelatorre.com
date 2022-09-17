import { writable } from 'svelte/store';

function createTitle() {
	const titleSuffix = 'Zamora de la Torre';
	const { subscribe, set } = writable(titleSuffix);

	return {
		subscribe,
		set: (title: string) => set(`${title} | ${titleSuffix}`),
		reset: () => set(titleSuffix)
	};
}

export const title = createTitle();
