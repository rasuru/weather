function AutocompleteItem({ label, onClick }) {
	const className =
		'p-4 bg-black bg-opacity-50 rounded mb-2 cursor-pointer hover:bg-blue-500 hover:bg-opacity-10';

	return (
		<li className={className} onClick={onClick}>
			{label}
		</li>
	);
}

export default AutocompleteItem;
