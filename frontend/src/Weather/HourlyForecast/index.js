import Chart from 'react-apexcharts';
import chartConfig from './chartConfig';

function HourlyForecast({ weather }) {
	return (
		<Chart
			className="text-black"
			type="area"
			options={chartConfig}
			series={[
				{
					name: 'Temperature',
					data: hourlyForecastFor(weather),
				},
			]}
		/>
	);
}

function hourlyForecastFor({ hourly, isCelsius }) {
	return hourly
		.filter((_, hour) => hour % 3 === 0 || hour === 23)
		.map(({ temp_c, temp_f }) => (isCelsius ? temp_c : temp_f));
}

export default HourlyForecast;
