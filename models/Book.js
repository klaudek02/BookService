var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    bookName : String,
    genre : String,
    premiereDate: {type: Date, default: Date.now}
});


module.exports=mongoose.model('Book', bookSchema);