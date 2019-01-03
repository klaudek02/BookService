const News = require('../models/News');
exports.news_create = function (req, res,next) {
    let news = new News(
        {
            userId : req.body.id,
            topic: req.body.topic,
            description: req.body.description,
            postedDate : req.body.postedDate
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
exports.news_read2 = function (req, res,next) {
    News.findById({_id : req.params._id}, function (err, news) {
        if (err) return next(err);
        res.send(news);
    })
};

exports.news_update = function (req, res,next) {
    News.findById(req.body._id, function(err, news)
    {
        news.comments.push(new Comment({
            userId: req.body.userId,
            body: req.body.body
        }))
        news.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send('News Created successfully')
        })
    })


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


