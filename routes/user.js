var express = require('express'),
    Models = require('../db'),
    router = express.Router()


router.post('/login', function(req, res, next) {
    var user = {
        email: req.body.email
    };
    Models.User.findOne(user, function(err, doc) {
        if (err) {
            res.send(err);
        } else {
            if (doc) {
                res.send(doc);
            } else {
                user.avatar="https://secure.gravatar.com/avatar/"+md5(user.email)+"?s=32";
                Models.User.create(user, function(err, doc) {
                    if (err) {

                    } else {
                        res.send(doc);
                    }
                });
            }
        }
    });
});

function md5(str) {
    return require('crypto').createHash('md5').update(str).digest('hex');
}
module.exports = router;