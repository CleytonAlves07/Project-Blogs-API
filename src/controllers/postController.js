const { getPostService, getByIdPostService } = require('../services/postService');

const getPostController = async (_req, res) => {
  const { status, posts } = await getPostService();

  return res.status(status).json(posts);
};

const getByIdPostController = async (req, res) => {
  const { id } = req.params;
  const { status, post, message } = await getByIdPostService(id);

  return res.status(status).json(post || { message });
};

module.exports = {
  getPostController,
  getByIdPostController,
};