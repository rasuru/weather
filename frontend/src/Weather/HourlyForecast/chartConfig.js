const fill = {
	type: 'gradient',
	gradient: {
		shade: 'dark',
		shadeIntensity: 0.5,
		gradientToColors: undefined,
		inverseColors: true,
		opacityFrom: 1,
		opacityTo: 0.1,
		stops: [0, 75, 100],
		colorStops: [],
	},
};
const theme = {
	monochrome: {
		enabled: true,
		color: '#255aee',
		shadeTo: 'light',
		shadeIntensity: 0.65,
	},
};
const gridConfig = {
	borderColor: '#FFFFFF33',
	xaxis: {
		lines: {
			show: true,
		},
	},
	yaxis: {
		lines: {
			show: true,
		},
	},
};
const visibleHours = [
	'0am',
	'3am',
	'6am',
	'9am',
	'12pm',
	'3pm',
	'6pm',
	'9pm',
	'11pm',
];
const chartConfig = {
	chart: {
		zoom: {
			enabled: false,
		},
		toolbar: {
			show: false,
		},
	},
	fill,
	theme,
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'smooth',
	},
	grid: gridConfig,
	xaxis: {
		categories: visibleHours,
		labels: {
			style: {
				colors: '#ffffff',
				fontSize: '12px',
			},
		},
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
};

export default chartConfig;
