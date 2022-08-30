const loginService = require('../services/loginService');

const login = async (req, res) => {
    const { email, password } = req.body;

    const { status, data } = await loginService(email, password);
    
    return res.status(status).json(data);
};

module.exports = {
  login,
};