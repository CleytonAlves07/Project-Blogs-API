const { BlogPost, Category, User } = require('../database/models');
const verifyPost = require('../middlewares/validatePost');

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

const updatePostService = async (title, content, id, currentUser) => {
  const verify = verifyPost(title, content);
  if (verify.status) return verify;
  
  const { post } = await getByIdPostService(id);
  
  if (currentUser !== post.userId) {
    return {
      status: 401,
      message: 'Unauthorized user',
    };
  }
  await BlogPost.update(
      { title, content },
      { where: { id } },
    );
  const { post: update } = await getByIdPostService(id);
  return {
    status: 200,
    update,
  };
};

const deletePostService = async (id, currentUser) => {
  const getIdPost = await BlogPost.findByPk(id);
  console.log(getIdPost);
  if (!getIdPost) {
    return {
      status: 404,
      message: 'Post does not exist',
  }; 
  }
  if (currentUser !== getIdPost.userId) {
    return {
      status: 401,
      message: 'Unauthorized user',
      
    };
  }
    await BlogPost.destroy({ where: { id } });
    return {
        status: 204,
      };
};

module.exports = {
  getPostService,
  getByIdPostService,
  updatePostService,
  deletePostService,
};