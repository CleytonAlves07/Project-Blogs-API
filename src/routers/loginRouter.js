const express = require('express');
const loginController = require('../controllers/loginController');
const { validateBody } = require('../middlewares/checkLogin');

const router = express.Router();

router.post('/', validateBody, loginController.login);

module.exports = router;