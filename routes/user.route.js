const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');



router.post('/create/username/:username/email/:email', user_controller.user_create)
router.get('/read/:id', user_controller.user_read)
router.put('/update/id/:id/username/:username', user_controller.user_update)
router.get('/readAll', user_controller.user_readAll)
router.put('/update/:id/liked/:liked', user_controller.user_updateFavoriteBook)
router.put('/update/:id/observed/:observed', user_controller.user_updateObservedUser)

module.exports = router;