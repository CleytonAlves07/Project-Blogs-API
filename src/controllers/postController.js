const {
  getPostService,
  getByIdPostService,
  updatePostService,
  deletePostService } = require('../services/postService');

const getPostController = async (_req, res) => {
  const { status, posts } = await getPostService();

  return res.status(status).json(posts);
};

const getByIdPostController = async (req, res) => {
  const { id } = req.params;
  const { status, post, message } = await getByIdPostService(id);

  return res.status(status).json(post || { message });
};

const updatePostController = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const currentUser = req.user.id;

  const { status, update, message } = await updatePostService(title, content, id, currentUser);  
  return res.status(status).json(update || { message });
};

const deletePostController = async (req, res) => {
  const { id } = req.params;
  const currentUser = req.user.id;

  const { status, message } = await deletePostService(id, currentUser);  
  return res.status(status).json({ message });
};

module.exports = {
  getPostController,
  getByIdPostController,
  updatePostController,
  deletePostController,
};