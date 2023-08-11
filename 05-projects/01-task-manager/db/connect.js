const mongoose = require('mongoose'); 

function connectToDb(url) {
    return mongoose.connect(url,
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
};

module.exports = connectToDb; 