import type { Locale } from '#lib/types/site.d.ts';

const monthDayFormatters: Record<Locale, Intl.DateTimeFormat> = {
	en: new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' }),
	es: new Intl.DateTimeFormat('es-CO', { month: 'short', day: '2-digit' })
};

/** Formats a Date as YYYY-MM-DD in the runtime's local timezone. */
export const formatIsoDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};

/** Formats a Date as a short month and day (e.g. "May 09") for the given locale. */
export const formatMonthDay = (date: Date, locale: Locale = 'en'): string =>
	monthDayFormatters[locale].format(date);
