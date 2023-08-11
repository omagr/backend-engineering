const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url + ' request event');
	if (req.url === '/') res.end('Hello Home');
	if (req.url === '/about') res.end('Hello About');
	if (req.url === '/delay') {
		// for (let index = 0; index < 1000000; index++) {
		// 	console.log(index);
		// }
		res.end('Hello About');
	}
	res.end();
});

server.listen(5000, () => {
	console.log('Server listening on port : 5000....');
});
