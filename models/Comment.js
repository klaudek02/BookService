var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    userId: String,
    postedDate : String,
    body : String
});
module.exports = mongoose.model('Comment', commentSchema);
