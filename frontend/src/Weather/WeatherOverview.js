import LocationInfo from './LocationInfo';
import Temperature from './Temperature';
import WeatherStatus from './WeatherStatus';

const className =
	'flex flex-col justify-center px-8 my-8 md:space-x-8 md:flex-row-reverse md:justify-between';

function WeatherOverview({ weather, setIsCelsius }) {
	return (
		<div className={className}>
			<LocationInfo weather={weather} />
			<div className="flex flex-col items-center my-8 space-y-4 text-center md:flex-row md:justify-center md:space-y-0 md:space-x-8 md:my-0 md:text-left">
				<Temperature
					weather={weather}
					setIsCelsius={setIsCelsius}
				/>
				<WeatherStatus weather={weather} />
			</div>
		</div>
	);
}

export default WeatherOverview;
