import { parse } from 'date-fns';

export function getWeekdayName({ date, locale = 'en', isLong = true }) {
	return date.toLocaleDateString(locale, {
		weekday: isLong ? 'long' : 'short',
	});
}

export function parseDate(s, format, referenceDate = new Date(), ...args) {
	return parse(s, format, referenceDate, ...args);
}

export function areDaysSameIn(d1, d2) {
	return d1.toDateString() === d2.toDateString();
}
