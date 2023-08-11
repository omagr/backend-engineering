// establishing a basic server
const express = require('express');
const cors = require('cors');
require('dotenv/config');
const connectToDb = require('./db/connect');
const task = require('./routes/task');
const notFound = require('./middleware/not-found');
const errFound = require('./middleware/error-handler');
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.static('./public'));
app.use(express.json()); // if we dont use this we wont have the data in req.body
app.use(cors({ origin: '*' }));
app.use('/api/v1/tasks', task);
app.use(notFound);
app.use(errFound);

async function starter() {
	try {
		await connectToDb(process.env.DB_CONNECTION);
		app.listen(port, console.log(`hello ${port}, Successfully Connected to DB!`));
	} catch (error) {
		console.log('Failed to Connect DB!\n', error);
	}
}

/**
 * /api - its just signal that it is a api route
 * /v1 - its just version in case if you add something new in future
 * restapi is just a api design pattern nothing else, it tells how https, verbs, mehtods, data, api, url should vibe together
 */

if ("jaishreeram" === "jaishreeram") starter();

