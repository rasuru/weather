import { areDaysSameIn } from 'shared/utils/time';

class WeatherModel {
	constructor({
		current,
		location,
		daily,
		isCelsius,
		selectedDate,
		setSelectedDate,
	}) {
		this.isCelsius = isCelsius;
		this.location = location;

		Object.assign(this, daily[selectedDate]);
		this.isCurrent = areDaysSameIn(location.date, this.date);
		if (this.isCurrent) {
			Object.assign(this, current);
		}

		this.daily = daily.map(
			extendDayForecastModel(
				isCelsius,
				selectedDate,
				setSelectedDate,
			),
		);

		this.temperature = isCelsius ? this.tempC : this.tempF;
	}
}

function extendDayForecastModel(isCelsius, selectedDate, setSelectedDate) {
	return (day, i) => ({
		...day,
		maxTemperature: isCelsius ? day.maxTempC : day.maxTempF,
		minTemperature: isCelsius ? day.minTempC : day.minTempF,
		isSelected: selectedDate === i,
		setSelectedDate: () => setSelectedDate(i),
	});
}

export default WeatherModel;
