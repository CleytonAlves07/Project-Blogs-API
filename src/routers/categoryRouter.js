const express = require('express');
const auth = require('../middlewares/auth');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.post('/', auth, categoryController.createCategoryController);

module.exports = router;