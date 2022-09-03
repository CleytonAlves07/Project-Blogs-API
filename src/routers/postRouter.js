const express = require('express');
const auth = require('../middlewares/auth');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', auth.auth, postController.getPostController);

router.get('/:id', auth.auth, postController.getByIdPostController);

router.put('/:id', auth.auth, postController.updatePostController);

router.delete('/:id', auth.auth, postController.deletePostController);

module.exports = router;