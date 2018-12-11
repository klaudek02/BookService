var mongoose = require('mongoose');
var {Schema} = mongoose;

var bookSchema = new Schema({
    bookId: String,
    bookName : String,
    genre : String,
    premiereDate: {type: Date, default: Date.now}
});


mongoose.model('Book', bookSchema);