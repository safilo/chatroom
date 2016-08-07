var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chatroom');

exports.User = mongoose.model('User', new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    avatar : String
}));

exports.Room = mongoose.model('Room', new mongoose.Schema({
    name : {
        type : String
    }
}));