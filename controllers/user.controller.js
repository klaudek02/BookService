const User = require('../models/User');
//const Book = require('../models/Book')

exports.user_create = function (req, res, next) {
    let user = new User(
        {
            username: req.params.username,
            email: req.params.email
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

exports.user_read = function (req, res,next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res,next) {
    User.findByIdAndUpdate(req.params.id, {username: req.params.username}, function (err, user) {
        if (err) return next(err);
        res.send('Username udpated.');
    });
};

exports.user_readAll = function (req, res,next) {
    User.find({}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_updateFavoriteBook = function (req, res,next) {
    User.findByIdAndUpdate(req.params.id, {liked : req.params.liked}, function (err, user) {
        if (err) return next(err);
        res.send('You like this book.');
    });
};
exports.user_updateObservedUser = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, {observed : req.params.observed}, function (err, user) {
        if (err) return next(err);
        res.send('You are following this person.');
    });
};