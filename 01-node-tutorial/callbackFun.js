// ?callback function
// *A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function B(name) {
	alert(`Hello, ${name}`);
}
function A(callback) {
	const name = prompt('Please enter your name.');
	callback(name);
}
// A(B);
