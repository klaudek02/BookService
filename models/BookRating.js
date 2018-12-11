var mongoose = require('mongoose');
var {Schema} = mongoose;

var bookRatingSchema = new Schema({
    bookRatingId: String,
    bookId: String,
    bookRating : {type: Number, min:1,max:5},
    ratingDate : {type: Date, default: Date.now}
});

mongoose.model('BookRating', bookRatingSchema);
module.exports = {
    BookRating: bookRatingSchema
};