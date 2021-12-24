export default function WeatherStatus({ weather }) {
	const { condition, humidity, windKPH } = weather;
	return (
		<div>
			<h3 className="mb-2 text-xl md:mb-0">
				{condition.text}
			</h3>
			<StatusField name="Humidity" value={`${humidity}%`} />
			<StatusField name="Wind" value={`${windKPH}km/h`} />
		</div>
	);
}

function StatusField({ name, value }) {
	return (
		<p className="text-gray-300">
			{name}: <span className="font-bold">{value}</span>
		</p>
	);
}
