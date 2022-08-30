const { createUserService } = require('../services/categoryService');

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  const { status, message, category } = await createUserService(name);

  return res.status(status).json(category || { message });
};

module.exports = {
  createCategoryController,
};