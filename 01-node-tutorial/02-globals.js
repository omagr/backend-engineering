// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed for example when we deploy our application we can make decision based on the server/host machine
// setInterval/setTimeout - to do side effects in app
// console - it's a savious

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);
console.log(console);
setInterval(() => {
	console.log('hello world');
}, 10000);
