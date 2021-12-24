import { useEffect, useRef } from 'react';

function useDidUpdate(inputs = []) {
	const didMountRef = useRef(false);

	useEffect(() => {
		if (didMountRef.current) return;
		else didMountRef.current = true;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, inputs);

	return didMountRef.current;
}

export default useDidUpdate;
