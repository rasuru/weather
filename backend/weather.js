import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const APIKey = process.env.WEATHER_API_KEY;
const APIBaseURL = "http://api.weatherapi.com/v1";
const createEndpoint = (APIMethod) =>
	`${APIBaseURL}/${APIMethod}.json?key=${APIKey}`;
const endpoints = {
	current: createEndpoint("current"),
	forecast: createEndpoint("forecast"),
	search: createEndpoint("search"),
};

export async function fetchCurrent({ query }) {
	return responseToJSON(fetch(`${endpoints.current}&q=${query}`));
}

export async function fetchForecast({ query }) {
	return responseToJSON(fetch(`${endpoints.forecast}&q=${query}&days=7`));
}

export async function search(query) {
	return responseToJSON(fetch(`${endpoints.search}&q=${query}`));
}

async function responseToJSON(res) {
	return JSON.parse(await (await res).text());
}
