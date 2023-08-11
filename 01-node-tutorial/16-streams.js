const { createReadStream } = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt');

//# for the end when theres no data
// stream.on('end', () => {
// 	console.log('There will be no more data.');
// });

//# contineously listening untill theres a data
stream.on('data', result => {
	console.log(result);
});

//# run only when theres a prblm in data
stream.on('error', err => console.log(err));

// !cool isnit -> look like a if-else without actuaaly having it
