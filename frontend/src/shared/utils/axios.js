import { create } from 'axios';

const { NODE_ENV, REACT_APP_API_BASE } = process.env;

const axios = create({
	baseURL:
		NODE_ENV === 'development' && !REACT_APP_API_BASE
			? 'http://localhost:8080'
			: REACT_APP_API_BASE,
});

export default axios;
