const { User } = require('../database/models');
const isInvalid = require('../helper/loginCheck');
const jwtService = require('./jwtService');

const loginService = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (isInvalid(user, email, password)) {
    return {
      status: 400,
      data: {
        message: 'Invalid fields', 
      },
    };
  }
  
  const token = jwtService.createToken(user);
  return {
    status: 200,
    data: {
      token,
    },
  };
};

module.exports = loginService;