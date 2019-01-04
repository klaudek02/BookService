var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    userId : String,
    topic: String,
    description:String,
    postedDate : {type: Date, default: Date.now},
    comments: [{type: Object}]
});

module.exports = mongoose.model('News', newsSchema);

