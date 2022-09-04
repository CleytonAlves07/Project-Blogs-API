const verifyPost = (title, content) => {
  if (!title || title.length <= 0 || !content || content.length <= 0) {
    return {
      status: 400,
      message: 'Some required fields are missing',
    };
  }
  return true;
};

module.exports = verifyPost;