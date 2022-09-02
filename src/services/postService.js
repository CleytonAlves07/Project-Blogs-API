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

const getByIdPostService = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) {
    return {
      status: 404,
      message: 'Post does not exist',
    };
  }
  return {
    status: 200,
    post,
  };
};

module.exports = {
  getPostService,
  getByIdPostService,
};