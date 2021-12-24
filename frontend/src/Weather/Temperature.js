import classNames from 'classnames';

export default function Temperature({ weather, setIsCelsius }) {
	return (
		<div className="flex text-xl">
			<span className="text-6xl">{weather.temperature}</span>
			<CelsiusFahrenheitSwitch
				isCelsius={weather.isCelsius}
				setIsCelsius={setIsCelsius}
			/>
		</div>
	);
}

function CelsiusFahrenheitSwitch({ isCelsius, setIsCelsius }) {
	return (
		<div className="flex flex-col ml-2">
			<TemperatureButton
				label="°C"
				onClick={() => setIsCelsius(true)}
				isActive={isCelsius}
			/>
			<TemperatureButton
				label="°F"
				onClick={() => setIsCelsius(false)}
				isActive={!isCelsius}
			/>
		</div>
	);
}

function TemperatureButton({ label, onClick, isActive }) {
	const baseClassName = 'rounded bg-opacity-10 pr-2 pl-1';
	const className = classNames(baseClassName, {
		'bg-white': isActive,
	});

	return (
		<button className={className} onClick={onClick}>
			{label}
		</button>
	);
}
