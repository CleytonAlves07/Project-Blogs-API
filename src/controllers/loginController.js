const { User } = require('../database/models');
const jwtService = require('../services/jwtService');

const validateBody = (body, res) => {
  const { email, password } = body;

  if (!email || !password) {
    res.status(400).json({ message: 'Some required fields are missing' });
    return false;
  }
  return true;
};

const check = (user, email, password) =>
  !user || user.email !== email || user.password !== password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!validateBody(req.body, res)) return;

    const user = await User.findOne({ where: { email } });
    
    if (check(user, email, password)) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = jwtService.createToken(user);
    return res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Ocorreu um erro', err: err.message });
  }
};

module.exports = {
  login,
};