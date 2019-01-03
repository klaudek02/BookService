const express = require('express');
const router = express.Router();
const news_controller = require('../controllers/news.controller');

router.post('/create/', news_controller.news_create)
router.get('/read/:id', news_controller.news_read)
router.get('/read/:id', news_controller.news_read)
router.put('/update/', news_controller.news_update)
//router.delete('/delete/bookName/:bookName', bookRating_controller.bookRating_delete)
router.get('/readAll', news_controller.news_readAll)
router.delete('/delete/id/:id', news_controller.news_delete)


module.exports = router;
