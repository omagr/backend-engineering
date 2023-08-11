const express = require('express');
const path = require('path');
const app = express();

// static assets
app.use(express.static('./public'))

app.get('/', (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, './public/index.html'));
});

// app.all('*', (req, res) => {
// 	res.status(404).send('resource not found');
// });

app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
