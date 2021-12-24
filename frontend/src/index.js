import API from 'API';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import useDidUpdate from 'shared/hooks/didUpdate';
import useOnMount from 'shared/hooks/onMount';
import './index.css';
import Search from './Search';
import Weather from './Weather';

function App() {
	const [weather, setWeather] = useState(null);
	const weatherComponent = <Weather weather={weather} />;
	const weatherWasSet = useDidUpdate([weather]);

	useOnMount(() => API.fetchInitialForecast().then(setWeather));

	return (
		<div className="mx-auto max-w-screen-md">
			{weatherWasSet && (
				<Search
					onSearch={handleSearch}
					autofocus={weather === undefined}
				/>
			)}
			{weather !== undefined && weatherComponent}
		</div>
	);

	async function handleSearch(query) {
		setWeather(null);
		setWeather(await API.fetchForecast(query));
	}
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
