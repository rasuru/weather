import { useState } from 'react';
import Repeat from 'shared/components/Repeat';
import ShimmerEffect from 'shared/components/ShimmerEffect';
import useDebouncedEffect from 'shared/hooks/debouncedEffect';
import AutocompleteItem from './AutocompleteItem';

function Autocomplete({ className, query, update, onSelect, visible }) {
	const [list, setList] = useState([]);

	const asyncUpdate = () => Promise.resolve(update());
	useDebouncedEffect(
		() => {
			setList(null);
			asyncUpdate().then(setList);
		},
		query,
		100,
	);

	if (!visible) return null;

	if (list === null) {
		return (
			<ul className={className}>
				<Repeat n={10}>
					<ShimmerEffect className="opacity-20 h-12 rounded mb-4" />
				</Repeat>
			</ul>
		);
	}

	if (list.length === 0) return null;

	return (
		<ul className={className}>
			{list.map((item) => (
				<AutocompleteItem
					{...item}
					onClick={() => onSelect(item.label)}
				/>
			))}
		</ul>
	);
}

export default Autocomplete;
