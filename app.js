var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

require('./services/cookieSession')(app);
require('./models/User');
require('./models/Book');
require('./models/BookRating');
require('./models/Comment');
require('./models/News');
require('./services/passport');
require('./services/mongoConnect');

require('./routes/googleAuth')(app);
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user.route');
var bookRouter=require('./routes/book.route')
var bookRatingRouter=require('./routes/bookRating.route')
var newsRouter=require('./routes/news.route')
var commentRouter=require('./routes/comment.route')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user',userRouter);
app.use('/book',bookRouter);
app.use('/bookRating',bookRatingRouter);
app.use('/news',newsRouter);
app.use('/comment',commentRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
