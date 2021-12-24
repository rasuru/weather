import { useEffect } from 'react';
import { useDebounce } from 'use-debounce';

function useDebouncedEffect(fn, value, delay) {
	const [debounced] = useDebounce(value, delay);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(fn, [debounced]);
}

export default useDebouncedEffect;
