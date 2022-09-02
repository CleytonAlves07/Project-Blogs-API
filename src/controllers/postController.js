const { getPostService } = require('../services/postService');

const getPostController = async (_req, res) => {
  const { status, posts } = await getPostService();

  return res.status(status).json(posts);
};

module.exports = {
  getPostController,
};