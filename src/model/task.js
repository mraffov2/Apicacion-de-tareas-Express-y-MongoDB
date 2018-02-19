module.exports = function () {

    var db = require('../libs/db-connection')();
    var mongoose = require('mongoose');

    var Task = mongoose.Schema({
        tittle: String,
        description: String,
        status: Boolean
    });

    return mongoose.model('tasks',Task);
    
}