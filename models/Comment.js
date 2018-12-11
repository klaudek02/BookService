var mongoose = require('mongoose');
var {Schema} = mongoose;

var commentSchema = new Schema({
    userId: String,
    postedDate : String,
    body : String
});
mongoose.model('Comment', commentSchema);