const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');



router.post('/create/', user_controller.user_create)
router.get('/read/', user_controller.user_read)
router.put('/update/', user_controller.user_update)
router.get('/readAll', user_controller.user_readAll)
router.put('/update/liked', user_controller.user_updateFavoriteBook)
router.put('/update/observed', user_controller.user_updateObservedUser)
router.put('/ban', user_controller.user_banUser)
module.exports = router;