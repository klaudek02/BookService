import {BookRating} from "./BookRating";

var mongoose = require('mongoose');
var {Schema} = mongoose;

var userSchema = new Schema({
    userId: String,
    username : String,
    email : String,
    googleId : String,
    picture: String,
    observed: [String],
    liked: [String],
    rated: [BookRating]
});

mongoose.model('User', userSchema);