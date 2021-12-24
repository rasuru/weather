import DayForecastModel from 'dayForecastModel';
import axios from 'shared/utils/axios';
import { getUserLocation } from 'shared/utils/location';
import { parseDate } from 'shared/utils/time';

export async function fetchInitialForecast() {
	return getUserLocation()
		.then(({ coords }) => `${coords.latitude}, ${coords.longitude}`)
		.then(fetchForecast, () => undefined);
}

export async function fetchForecast(query) {
	const endpoint = `api/weather/forecast?q=${query}`;
	const result = (await axios.get(endpoint)).data;

	if (result.error) return result;

	const location = locationModelFor(result.location);
	const current = currentWeatherModelFor(result.current);
	const daily = result.forecast.forecastday.map(
		(dayForecast) => new DayForecastModel(dayForecast),
	);

	return {
		location,
		current,
		daily,
	};
}

function locationModelFor(location) {
	const result = { ...location };
	result.date = parseDate(location.localtime, 'yyyy-MM-dd H:mm');

	if (result.country === 'United States of America') {
		result.country = 'USA';
	}

	if (result.country === 'United Kingdom') {
		result.country = 'UK';
	}

	if (result.country === 'United Arab Emirates') {
		result.country = 'UK';
	}

	return result;
}

function currentWeatherModelFor(current) {
	const result = { ...current };
	result.tempC = Math.round(result.temp_c);
	result.tempF = Math.round(result.temp_f);
	delete result.temp_c;
	delete result.temp_f;

	return result;
}

const API = { fetchForecast, fetchInitialForecast };
export default API;
