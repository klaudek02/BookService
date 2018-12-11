var mongoose = require('mongoose');
var {Schema} = mongoose;

var newsSchema = new Schema({
    userId : String,
    topic: String,
    description:String,
    postedDate : {type: Date, default: Date.now},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});


mongoose.model('News', newsSchema);