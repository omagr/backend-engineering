// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

//# customEmitter.on(#event - name, #event-callback,
//#   (name, id) => {
//#   console.log(`data recieved user ${name} with id:${id}`)
//# })
customEmitter.on('response', (name, id) => {
	console.log(`data recieved user ${name} with id:${id}`);
});

customEmitter.on('response', () => {
	console.log('some other logic here');
});

//# customEmitter.emit(#event - name, #event - para)
customEmitter.emit('response', 'john', 34);

// ? what is a event - emit()
// - its like a slave that keep watching on actions and listen to it and whenever we call it then it will run callback

// ? what is a event listener - on()
// - its that calbback when we fired some event and what the task we want to perform are isnide of it

// !ragister a event
//- customEmitter.on('response', (a,b) => {
//- 	console.log('some other logic here');
//- });

// !call a event
//- customEmitter.emit('event-name', 'para1', para2);
