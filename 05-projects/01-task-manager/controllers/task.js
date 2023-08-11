const { createCustomError } = require('../errors/custom-error');
const asyncWrapper = require('../middleware/async');
const Task = require('../models/task');

const getAllItems = asyncWrapper(async (req, res) => {
	console.log('getAllItems');
	const tasks = await Task.finsd({});
	res.status(200).json({ tasks });
});

const delAllItems = asyncWrapper(async (req, res) => {
	console.log('delAllItems');
	const task = await Task.deleteMany({});
	res.status(200).json({ task });
});

const getAItem = asyncWrapper(async (req, res) => {
	console.log('getAItem');
	const { id: taskId } = req.params;
	const task = await Task.findOne({ _id: taskId });
});

const delAItem = asyncWrapper(async (req, res) => {
	console.log('delAItem');
	const { id: taskId } = req.params;
	const task = await Task.deleteOne({ _id: taskId });
	if (!task) return next(createCustomError(`No task with id : ${taskId}`, 404));
	res.status(200).json({ task });
});

const posAItem = asyncWrapper(async (req, res) => {
	console.log('posAItem');
	const task = await Task.create(req.body);
	res.status(201).json({ task });
});

//! put vs patch
// * put and ptach both are for updating content
//     * put -> to replace extsing resources
//     * patch -> to partial updating
//# example -> res = {a:1, b:2}
//# put ({a:10}) -> res = {a:10}
//# patch ({a:10}) -> res = {a:10, b:2}

const edtAItem = async (req, res) => {
	/*
     ? why we get old value after changing? 
     ? why we dont running the valiadators while updating data 
     - bcz we dont the options
     # {new:true, runValidators:true}
     */
	console.log('edtAItem');
	const { id: taskId } = req.params;
	const data = req.body;
	const task = await Task.findOneAndUpdate({ _id: taskId }, data, { new: true, runValidators: true, overwrite: true });
	if (!task) return next(createCustomError(`No task with id : ${taskId}`, 404));
	res.status(200).json({ task });
};

const updAItem = async (req, res) => {
	/*
     ? why we get old value after changing? 
     ? why we dont running the valiadators while updating data 
     - bcz we dont the options
     # {new:true, runValidators:true}
     */
	console.log('updAItem');
	const { id: taskId } = req.params;
	const data = req.body;
	const task = await Task.findOneAndUpdate({ _id: taskId }, data, { new: true, runValidators: true });
	if (!task) return next(createCustomError(`No task with id : ${taskId}`, 404));
	res.status(200).json({ task });
};

module.exports = { updAItem, getAllItems, posAItem, getAItem, edtAItem, delAItem, delAllItems };

// jaise wo sketiing wali ladki
// utai scoty chli gyio sketing krne ghumne clg me ya maze krne fir baate krna shuru strangers se me khbi na kjr pau
// bhaui y maze krne ke baad bhiu job lelete h bdiya ai intern in isro banlete h coimaopnes bdiya
