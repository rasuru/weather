import { minQueryLength } from 'shared/constants/api';
import axios from 'shared/utils/axios';

export async function fetchSuggestions(query) {
	if (query.trim().length < minQueryLength) return [];

	const endpoint = `api/weather/autocomplete?q=${query}`;
	const list = (await axios.get(endpoint)).data;

	return list.map(({ id, name, region }) => ({
		key: id,
		label: removeRegionPart(name, region),
	}));
}

function removeRegionPart(name, region) {
	return name.replace(`, ${region}`, '');
}
