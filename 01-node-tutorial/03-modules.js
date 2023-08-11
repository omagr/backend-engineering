//* CommonJS, every file is module (by default)
//* Modules - Encapsulated Code (only share minimum)
/*
modules have 3 types 
 1 -> built-in modules /eg-> fetch,https,os,file etc
 2 -> 3rd-party modules /eg-> axios,numeral etc 
 3 -> local modules /eg-> ./04-names,./05-utils etc
*/

// module wrapper function ?
// * js module wrapper function? It keeps top-level variables that are defined with var, const, or let are scoped to the module rather than the global object. It helps to provide some global-looking variables that are actually specific to the module like module, exports, __filename, and __dirname.
//! function (export, require, module, __filename, __direname)

//* const config = require('/path/to/file');

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
const { addToFile, refArr } = require('../../3-module/a/b/c/d/nested');

//* local path rules
// 1. start with ./
// 2. you can destructure it one or use dot oprator

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// module
console.log(module);
console.log(addToFile);

//* ref to value in module exoprts
// !before
console.log(refArr);
// !after
refArr = [3, 2, 1];
console.log(refArr);
// !it wont assgin or alter the ref to value

//* so it invoke the ./07-mind-grenade file
require('./07-mind-grenade');
//? why wverthing os working its own
//! because node import all module in a function so that's when we invoke it run all the code in that file no matter weather you are calling it or not