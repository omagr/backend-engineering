const { readFile, writeFile } = require('fs');

// ? async <-> non-blockling

// *1 it starts from here
console.log('start');
// *2 it will offload this function bcoz its async
readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	readFile('./content/second.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;
		writeFile(
			'./content/result-async.txt',
			`Here is the result : ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				// *4 when the task is completed then it run this
				console.log('done with this task');
			}
		);
	});
});
// *3 then it will excuted this one
console.log('starting next task');
