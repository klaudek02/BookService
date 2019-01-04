const Book = require('../models/Book');


exports.book_create = function (req, res,next) {
    let book = new Book(
        {
            bookName : req.params.bookName,
            genre : req.params.genre,
            premiereDate: req.params.premiereDate
        }
    );
    book.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Book Created successfully')
    })
};

exports.book_read = function (req, res,next) {
    Book.find({bookName : req.params.bookName}, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};

exports.book_update = function (req, res,next) {
    Book.update({bookName : req.params.bookName},{genre: req.params.genre}, function (err, book) {
        if (err) return next(err);
        res.send('Book udpated.');
    });


};

exports.book_delete = function (req, res,next) {
    Book.deleteOne({bookName : req.params.bookName}, function (err,book) {
        if (err) return next(err);
        res.send('Book deleted successfully!');
    })

};

exports.book_readAll = function (req, res,next) {
    Book.find({}, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};