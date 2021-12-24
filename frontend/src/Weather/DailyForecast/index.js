import DailyForecastItem from './DailyForecastItem';

function DailyForecast({ weather }) {
	return (
		<ul className="flex overflow-x-auto px-4 space-x-4">
			{weather.daily.map((day) => (
				<DailyForecastItem key={day.date} day={day} />
			))}
		</ul>
	);
}

export default DailyForecast;
