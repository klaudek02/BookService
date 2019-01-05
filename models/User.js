var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username : {type:String, required:true},
    email : {type:String, required:true},
    googleId : String,
    picture: String,
    observed: [String],
    liked: [String],
    rated: [{type: Schema.Types.ObjectId, ref: 'BookRating'}],
    userType: String,
    ban: {type:Boolean, default:false}
});

module.exports=mongoose.model('User', userSchema);