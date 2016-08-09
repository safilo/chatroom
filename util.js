var crypto = require('crypto');
exports.md5 = function(source){
    return crypto.createHash('md5').update(source).digest('hex');
}
console.log(exports.md5('byclear@foxmail.com'));