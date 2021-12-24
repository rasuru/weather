function HistoryHeader({ controller }) {
	return (
		<header className="flex justify-between mb-2">
			<h3 className="font-bold text-gray-300">
				Search history
			</h3>
			<button
				className="px-2 py-1 bg-white bg-opacity-5 rounded hover:bg-opacity-10"
				onClick={controller.clear}
			>
				Clear
			</button>
		</header>
	);
}

export default HistoryHeader;
