const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', userController.createUserController);

router.get('/', auth.auth, userController.getAllUserController);

router.get('/:id', auth.auth, userController.getByIdUserController);

module.exports = router;