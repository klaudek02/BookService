import {Comment} from "./Comment";
var mongoose = require('mongoose');
var {Schema} = mongoose;

var newsSchema = new Schema({
    newsId: String,
    userId : String,
    topic: String,
    description:String,
    postedDate : {type: Date, default: Date.now},
    comments: [Comment]
});


mongoose.model('News', newsSchema);