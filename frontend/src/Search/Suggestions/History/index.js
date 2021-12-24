import HistoryHeader from './HistoryHeader';
import HistoryItem from './HistoryItem';
import IconQuestion from './IconQuestion';

function History({ history, controller }) {
	if (history.length === 0) {
		return (
			<div className="py-8 text-center">
				<IconQuestion className="mx-auto mb-8 w-32 opacity-50" />
				<span className="text-2xl text-gray-300">
					The search history is empty
				</span>
			</div>
		);
	}

	return (
		<>
			<HistoryHeader controller={controller} />
			<ul>
				{history.map((item, i) => (
					<HistoryItem
						key={i}
						item={item}
						controller={controller}
					/>
				))}
			</ul>
		</>
	);
}

export default History;
