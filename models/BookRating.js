var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookRatingSchema = new Schema({
    bookId: String,
    bookRating : {type: Number, min:1,max:5},
    ratingDate : {type: Date, default: Date.now}
});

module.exports = mongoose.model('BookRating', bookRatingSchema);
