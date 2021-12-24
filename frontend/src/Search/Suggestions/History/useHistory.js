import { useState } from 'react';

function add(query) {
	setAll([...getAll(), { query, timestamp: new Date() }]);
}

function remove(timestamp) {
	setAll(getAll().filter(({ timestamp: ts }) => +ts !== +timestamp));
}

function setAll(history) {
	return localStorage.setItem('searchHistory', JSON.stringify(history));
}

function getAll() {
	const history = JSON.parse(localStorage.getItem('searchHistory')) ?? [];
	const result = history.map(({ query, timestamp }) => {
		return {
			query,
			timestamp: new Date(timestamp),
		};
	});

	result.sort((a, b) => b.timestamp - a.timestamp);

	return result;
}

function useHistory() {
	const [history, setHistory] = useState(getAll());
	const controller = {
		add(query) {
			add(query);
			setHistory(getAll());
		},
		remove(timestamp) {
			remove(timestamp);
			setHistory(getAll());
		},
		clear() {
			setAll([]);
			setHistory([]);
		},
	};

	return [history, controller];
}

export default useHistory;
