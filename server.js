var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser')

var app = express();

var user = require('./routes/user'),
    room = require('./routes/room')

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use('/user', user);
app.use('/room', room);


// routes
app.get('/', function(req, res) {
    res.sendFile('app/index.html', {root : __dirname});
});

var server = require('http').createServer(app);
server.listen(8080, function() {
    console.log('server is start,listen in 8080');
});