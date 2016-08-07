var express = require('express'),
    Models = require('../db'),
    router = express.Router()
    
router.get('/list', function(req, res, next) {
    Models.Room.find({}, function(err, rooms) {
        if(err) {
            res.status(500).send(err);
        } else {
            if(rooms) {
                res.send(rooms);
            }
        }
    });
});

router.post('/add', function(req, res, next) {
    var room = req.body;
    Models.Room.create(room, function(err, doc) {
        if(err) {
            res.status(500).send(err);
        } else {
            if(doc) {
                res.send(doc);
            }
        }
    });
});

module.exports = router;