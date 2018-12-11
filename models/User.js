var mongoose = require('mongoose');
var {Schema} = mongoose;

var userSchema = new Schema({
    username : String,
    email : String,
    googleId : String,
    picture: String,
    observed: [String],
    liked: [String],
    rated: [{type: Schema.Types.ObjectId, ref: 'BookRating'}],
    userType: String
});

mongoose.model('User', userSchema);