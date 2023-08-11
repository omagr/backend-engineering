const mongoose = require("mongoose");

//# Schema: set a strict strcture for data to get conssitent data as mongodb doenst have that functionailty

/*
 * Validations
 *
 */
const schema_task = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must be Fill'],
        trim: true,
        maxlength: [15, 'Cannot be more than 5 char']
    },
    completed: {
        type: Boolean,
        // default: false
    }
});

//# Models: models are fancy constructuor compiled from schema definitions, an instance of a model is called a document
module.exports = mongoose.model('task', schema_task);