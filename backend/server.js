import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import * as weather from './weather.js';
dotenv.config();

const server = express();
const { NODE_ENV } = process.env;
const PORT = process.env.PORT ?? 8080;

server.use(
	rateLimit({
		windowMs: 15 * 60 * 1000,
		max: 100,
		delayMs: 0,
	}),
);

const csp = {
	defaultSrc:
		NODE_ENV === 'production'
			? ["'self'"]
			: ["'self'", "'unsafe-eval'"],
	connectSrc:
		NODE_ENV === 'production'
			? ["'self'"]
			: ["'self'", "'localhost:*'"],
	imgSrc: ['*', 'data:'],
};

server.use(
	helmet({
		useDefaults: true,
		contentSecurityPolicy: {
			useDefaults: true,
			directives: csp,
		},
	}),
);

if (NODE_ENV !== 'production') {
	const CORSOptions = { credentials: true, origin: true };
	server.use(cors(CORSOptions));
	server.options('*', cors(CORSOptions));
}

server.use(express.static('static'));

server.get('/api/weather/current', async (req, res) => {
	return res.json(
		await weather.fetchCurrent({
			query: req.query.q,
		}),
	);
});

server.get('/api/weather/forecast', async (req, res) => {
	return res.json(
		await weather.fetchForecast({
			query: req.query.q,
		}),
	);
});

server.get('/api/weather/autocomplete', async (req, res) => {
	return res.json(await weather.search(req.query.q));
});

server.listen(PORT, () => {
	console.log(`Server port: ${PORT}`);
});
