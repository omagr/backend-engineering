const { readFile } = require('fs');

const getText = path => {
	return new Promise((resolve, reject) => {
		readFile(path, 'utf-8', (err, res) => {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
		});
	});
};

// !this is what happens when promises is not handle!
const text = getText('../content/first.txt');
console.log(text);
//@ Promise { <pending> }

// #so we have two approches here
// - 1st
// !it will run only when the promise return something
getText('../content/first.txt')
	.then(result => console.log(result))
	.catch(err => console.log(err));

// - 2nd
console.log('1');
function print() {
	console.log(2.5);
}
async function start() {
	console.log('2');
	// ! so when we use await then all of the code blow the await statment will be in pending state also
	const res = await getText('../content/first.txt');
	print();
	console.log('3');
	console.log(res);
}
start();
console.log('4');

// @logs
// 1
// 2
// 4
// 2.5
// 3
// Hello this is first text file

/*
acronomyens
rel  -> Resolve
rej  -> Reject
rep  -> Response 
res  -> Result
err  -> Error 
pen  -> Pending 
suc  -> Success 
full -> Fullfilled 
fail -> Failed 
*/
