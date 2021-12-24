import React, { useRef, useState } from 'react';
import { useRootClose } from 'react-overlays';
import IconSearch from 'shared/components/icons/search';
import { minQueryLength } from 'shared/constants/api';
import SearchInput from './SearchInput';
import Suggestions from './Suggestions';
import useHistory from './Suggestions/History/useHistory';

function Search({ onSearch, autofocus }) {
	const [query, setQuery] = useState('');
	const [hasFocus, setHasFocus] = useState(autofocus);
	const [history, historyController] = useHistory();
	const ref = useRef(null);

	useRootClose(ref, () => setHasFocus(false), { disabled: !hasFocus });

	return (
		<form
			ref={ref}
			className="flex relative p-4"
			onSubmit={(e) => {
				e.preventDefault();
				search();
			}}
		>
			<SearchInput
				query={query}
				setQuery={setQuery}
				autofocus={autofocus}
				onFocus={() => setHasFocus(true)}
			/>
			<Suggestions
				hasFocus={hasFocus}
				query={query}
				history={history}
				historyController={historyController}
				onSelect={(query) => {
					setQuery(query);
					search(query);
				}}
			/>
			<button
				type="submit"
				className="px-4 py-2 mr-2 text-blue-500 bg-white rounded"
			>
				<IconSearch />
			</button>
		</form>
	);

	function search(q = query) {
		if (q.trim().length < minQueryLength) return;

		setHasFocus(false);
		onSearch(q);
		historyController.add(q);
	}
}

export default Search;
