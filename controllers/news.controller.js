const News = require('../models/News');


exports.news_create = function (req, res,next) {
    let news = new News(
        {
            userId : req.params.id,
            topic: req.params.topic,
            description: req.params.description,
            postedDate : req.params.postedDate,
      //      comments: req.params.ObjectId     trzeba obczaić obsługiwanie tych tablic obiektów

        }
    );

    news.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('News Created successfully')
    })
};


exports.news_read = function (req, res,next) {
    News.find({topic : req.params.topic}, function (err, news) {
        if (err) return next(err);
        res.send(news);
    })
};

exports.news_update = function (req, res,next) {
    News.update({topic : req.params.topic},{description: req.params.description}, function (err, news) {
        if (err) return next(err);
        res.send('News udpated.');
    });


};

exports.news_delete = function (req, res,next) {
    News.deleteOne({topic: req.params.topic}, function (err,news) {
        if (err) return next(err);
        res.send('News deleted successfully!');
    })

};


exports.news_readAll = function (req, res,next) {
    News.find({}, function (err, news) {
        if (err) return next(err);
        res.send(news);
    })
};

/*
exports.news_readAll_comments = function (req, res,next) {
    News.find({topic : req.params.topic}, function (err, news) {
        if (err) return next(err);
        res.send(news);
    })
};
*/


