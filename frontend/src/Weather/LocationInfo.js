import IconLocation from 'shared/components/icons/location';

function LocationInfo({ weather }) {
	const { name, country } = weather.location;
	const label = `${name}, ${country}`;
	const googleMapsURL = googleMapsURLFor(label);

	return (
		<a className="block text-center" href={googleMapsURL}>
			<p className="font-bold">
				<IconLocation /> {label}
			</p>
			<p>{getDateString(weather)}</p>
		</a>
	);
}

const dateConfig = {
	weekday: 'short',
	day: 'numeric',
	month: 'long',
};
const timeConfig = {
	hour: 'numeric',
	minute: 'numeric',
};
function getDateString(weather) {
	return weather.location.date.toLocaleString('en', {
		...dateConfig,
		...(weather.isCurrent ? timeConfig : {}),
	});
}

function googleMapsURLFor(q) {
	return `https://www.google.com/maps/search/${q}/`;
}

export default LocationInfo;
