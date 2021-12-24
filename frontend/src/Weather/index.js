import { useState } from 'react';
import LoadingIndicator from 'shared/components/LoadingIndicator';
import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';
import WeatherModel from './weatherModel';
import WeatherOverview from './WeatherOverview';

export default function Weather({ weather }) {
	const [selectedDate, setSelectedDate] = useState(0);
	const [isCelsius, setIsCelsius] = useState(true);

	if (weather === null) {
		return <LoadingIndicator className="w-min mx-auto" />;
	}

	if (weather.error?.code === 1006) {
		return notFoundLabel;
	}

	const weatherModel = new WeatherModel({
		...weather,
		isCelsius,
		selectedDate,
		setSelectedDate,
	});

	return (
		<>
			<WeatherOverview
				weather={weatherModel}
				setIsCelsius={setIsCelsius}
			/>
			<HourlyForecast weather={weatherModel} />
			<DailyForecast weather={weatherModel} />
		</>
	);
}

const notFoundLabel = (
	<p className="text-center my-8 text-3xl text-gray-300">
		Location not found
	</p>
);
