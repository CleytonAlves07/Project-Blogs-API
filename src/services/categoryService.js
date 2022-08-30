const { Category } = require('../database/models');

const createUserService = async (name) => {
  if (!name) {
    return {
      status: 400,
      message: '"name" is required',
    };
  }
  const category = await Category.create({ name });
  return {
    status: 201,
    category,
  };
};

const getAllCategoriesService = async () => {
  const categories = await Category.findAll();

  return {
    status: 200,
    categories,
  };
};

module.exports = {
  createUserService,
  getAllCategoriesService,
};