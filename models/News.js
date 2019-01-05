var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    userId : String,
    topic: {type:String, required:true},
    description:{type:String, required:true},
    postedDate : {type: Date, default: Date.now},
    comments: [{type: Object}]
});

module.exports = mongoose.model('News', newsSchema);

