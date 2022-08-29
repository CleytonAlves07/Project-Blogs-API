const userService = require('../services/userService');

const userController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const { status, data } = await userService(displayName, email, password, image);

    return res.status(status).json({ message: data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = userController;