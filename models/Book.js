var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    bookName : {type:String, required:true},
    genre : {type:String, required:true},
    premiereDate: {type: Date, default: Date.now}
});


module.exports=mongoose.model('Book', bookSchema);