var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189:27017/wlqingchat');
// mongoose.connect('mongodb://localhost/wlqingchat');
exports.User = mongoose.model('User',require('./user'));
exports.Room = mongoose.model('Room',require('./room'));