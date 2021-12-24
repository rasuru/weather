import Autocomplete from 'shared/components/Autocomplete';
import { minQueryLength } from 'shared/constants/api';
import { fetchSuggestions } from '../API';
import History from './History';

function Suggestions({
	hasFocus,
	query,
	onSelect,
	history,
	historyController,
}) {
	const queryIsEmpty = query.trim().length === 0;

	if (!hasFocus) {
		return null;
	}

	if (queryIsEmpty) {
		return (
			<SuggestionsWrapper>
				<History
					history={history}
					controller={{
						...historyController,
						add: onSelect,
					}}
				/>
			</SuggestionsWrapper>
		);
	}

	if (hasFocus && query.length >= minQueryLength) {
		return (
			<SuggestionsWrapper>
				<Autocomplete
					visible={hasFocus}
					query={query}
					update={() => fetchSuggestions(query)}
					onSelect={onSelect}
				/>
			</SuggestionsWrapper>
		);
	}

	return null;
}

const className =
	'overflow-y-auto absolute inset-x-0 z-50 p-4 mt-14 mr-6 ml-4 bg-black bg-opacity-80 rounded drop-shadow-lg backdrop-blur-md';
function SuggestionsWrapper({ children }) {
	return (
		<div className={className} style={{ maxHeight: '80vh' }}>
			{children}
		</div>
	);
}

export default Suggestions;
