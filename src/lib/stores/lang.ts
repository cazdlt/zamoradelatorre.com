import { writable } from 'svelte/store';
import type { Locale } from '#lib/types/site.d.ts';

const STORAGE_KEY = 'zdlt-lang';

/** Active UI locale for bilingual pages and shared chrome. */
export const lang = writable<Locale>('en');

/** Initializes locale from URL query (?lang=es|en), localStorage, or browser language. */
export const initLang = (): void => {
	if (typeof window === 'undefined') return;

	const params = new URLSearchParams(window.location.search);
	const queryLang = params.get('lang');
	if (queryLang === 'es' || queryLang === 'en') {
		setLang(queryLang);
		return;
	}

	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === 'es' || stored === 'en') {
		lang.set(stored);
		return;
	}

	const browserLang = window.navigator.language?.toLowerCase() ?? '';
	lang.set(browserLang.startsWith('es') ? 'es' : 'en');
};

/** Updates the active locale and persists it to localStorage. */
export const setLang = (next: Locale): void => {
	lang.set(next);
	if (typeof window !== 'undefined') {
		window.localStorage.setItem(STORAGE_KEY, next);
	}
};
