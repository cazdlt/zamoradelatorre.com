const monthDayFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'short',
	day: '2-digit'
});

/** Formats a Date as YYYY-MM-DD in the runtime's local timezone. */
export const formatIsoDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};

/** Formats a Date as "MMM DD" (e.g. "May 09") in en-US. */
export const formatMonthDay = (date: Date): string => monthDayFormatter.format(date);
