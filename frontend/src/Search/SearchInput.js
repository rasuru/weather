import { useRef } from 'react';
import useOnMount from 'shared/hooks/onMount';

const className =
	'flex-grow px-4 py-3 mr-2 min-w-0 h-12 placeholder-gray-400 text-white bg-white bg-opacity-10 rounded ring-white ring-opacity-70 outline-none focus:ring';

function SearchInput({ query, setQuery, onFocus, onBlur, autofocus }) {
	const ref = useRef();

	useOnMount(() => {
		if (autofocus) {
			ref.current.focus();
		}
	});

	return (
		<input
			ref={ref}
			className={className}
			placeholder="Type the location here..."
			value={query}
			onChange={({ target }) => setQuery(target.value)}
			onFocus={onFocus}
			onBlur={onBlur}
		/>
	);
}

export default SearchInput;
