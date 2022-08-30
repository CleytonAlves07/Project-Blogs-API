const { createUserService, getAllCategoriesService } = require('../services/categoryService');

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  const { status, message, category } = await createUserService(name);

  return res.status(status).json(category || { message });
};

const getAllCategoriesController = async (_req, res) => {
  const { status, categories } = await getAllCategoriesService();

  return res.status(status).json(categories);
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
};