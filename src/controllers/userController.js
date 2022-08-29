const userService = require('../services/userService');

const userController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const { status, message, token } = await userService(displayName, email, password, image);
    
    return res.status(status).json(token ? { token } : { message });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = userController;