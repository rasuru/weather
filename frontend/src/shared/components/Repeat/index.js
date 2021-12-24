function Repeat({ children, n }) {
	return (
		<>
			{Array(n)
				.fill(0)
				.map(() => children)}
		</>
	);
}

export default Repeat;
