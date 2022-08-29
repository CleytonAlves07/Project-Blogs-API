const loginService = require('../services/loginService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { status, data } = await loginService(email, password);
    
    return res.status(status).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  login,
};