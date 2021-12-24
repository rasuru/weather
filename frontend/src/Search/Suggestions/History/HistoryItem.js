import { forwardRef, useRef } from 'react';
import IconClose from 'shared/components/icons/close';

function HistoryItem({ item: { query, timestamp }, controller }) {
	const className =
		'flex justify-between p-4 mb-2 bg-black bg-opacity-50 rounded cursor-pointer hover:bg-blue-500 hover:bg-opacity-10';
	const removeButtonRef = useRef();

	return (
		<li
			className={className}
			onClick={({ target }) => {
				const removeButton = removeButtonRef.current;

				if (removeButton.contains(target)) return;

				controller.add(query);
			}}
		>
			<div>
				<p>{query}</p>
				<span className="text-sm">
					{formatTimestamp(timestamp)}
				</span>
			</div>
			<RemoveButton
				ref={removeButtonRef}
				controller={controller}
				timestamp={timestamp}
			/>
		</li>
	);
}

const RemoveButton = forwardRef(({ controller, timestamp }, ref) => {
	const className =
		'flex justify-center p-3 my-auto bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 align-center';
	const onClick = () => controller.remove(timestamp);

	return (
		<button ref={ref} className={className} onClick={onClick}>
			<IconClose size={20} />
		</button>
	);
});

function formatTimestamp(timestamp) {
	const shouldOmitYear = timestamp.year === new Date().year;
	const config = {
		year: shouldOmitYear ? undefined : 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
	};

	return timestamp.toLocaleDateString('en', config);
}

export default HistoryItem;
