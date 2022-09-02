const express = require('express');
const auth = require('../middlewares/auth');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', auth, postController.getPostController);

router.get('/:id', auth, postController.getByIdPostController);

module.exports = router;