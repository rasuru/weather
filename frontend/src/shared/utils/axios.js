import { create } from 'axios';

const { REACT_APP_API_BASE } = process.env;

const axios = create({
	baseURL: REACT_APP_API_BASE,
});

export default axios;
