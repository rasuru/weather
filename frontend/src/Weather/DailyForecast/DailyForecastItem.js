import classNames from 'classnames';
import { getWeekdayName } from 'shared/utils/time';

const classNameBase =
	'flex flex-col items-center justify-between my-4 py-2 px-4 rounded-2xl bg-white bg-opacity-10 cursor-pointer';

function DailyForecastItem({ day }) {
	const className = classNames(classNameBase, {
		'bg-blue-500': day.isSelected,
	});
	const weekdayName = getWeekdayName({
		date: day.date,
		isLong: false,
	});

	return (
		<li onClick={day.setSelectedDate} className={className}>
			<h3>{weekdayName}</h3>
			<img
				src={day.condition.icon}
				alt={day.condition.text}
			/>
			<p className="w-16 text-center ml-2 text-md leading-none">
				{day.maxTemperature}°{' '}
				<span className="text-gray-400">
					{day.minTemperature}°
				</span>
			</p>
		</li>
	);
}

export default DailyForecastItem;
