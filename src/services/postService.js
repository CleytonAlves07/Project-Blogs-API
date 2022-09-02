const { BlogPost, Category, User } = require('../database/models');

const getPostService = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return {
    status: 200,
    posts,
  };
};

module.exports = {
  getPostService,
};