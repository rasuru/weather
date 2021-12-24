class DayForecastModel {
	constructor({ date_epoch, day, hour }) {
		this.date = new Date(date_epoch * 1000);
		this.minTempC = Math.round(day.mintemp_c);
		this.minTempF = Math.round(day.mintemp_f);
		this.maxTempC = Math.round(day.maxtemp_c);
		this.maxTempF = Math.round(day.maxtemp_f);
		this.tempC = this.maxTempC;
		this.tempF = this.maxTempF;
		this.windKPH = day.maxwind_kph;
		this.hourly = hour;
		this.condition = day.condition;
		this.humidity = day.humidity ?? day.avghumidity;
	}
}

export default DayForecastModel;
