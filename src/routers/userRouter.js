const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', userController.createUserController);

router.get('/', auth, userController.getAllUserController);

module.exports = router;