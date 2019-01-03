var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    userId : String,
    topic: String,
    description:String,
    postedDate : {type: Date, default: Date.now},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});



module.exports = mongoose.model('News', newsSchema);

