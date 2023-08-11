const { readFileSync, writeFileSync } = require('fs');

// ? sync <-> blockling

// *1 it starts from here
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// *2 it will onload this function bcoz its sync
writeFileSync(
	'./content/result-sync.txt',
	`Here is the result : ${first}, ${second}`,
	{ flag: 'a' }
);
// *3 when the task is completed then it run this
console.log('done with this task');
// *4 then it will excuted this one
console.log('starting the next one');
