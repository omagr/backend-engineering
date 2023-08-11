const express = require('express');
const { products } = require('./data');
const app = express();
app.get('/', (req, res) => {
	res.json(products);
	res.end();
});
app.listen(3000, () => {
	console.log('runed');
});
