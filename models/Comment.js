var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    userId: String,
    postedDate : {type: Date, default: Date.now},
    body : String
});
module.exports = mongoose.model('Comment', commentSchema);