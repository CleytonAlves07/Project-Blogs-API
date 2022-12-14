const { User } = require('../database/models');

const alreadyExist = async (email) => {
  const exist = await User.findOne({ where: { email } });
  if (exist) {
    return {
      status: 409,
      message: 'User already registered',
    };
  }
  return true;
};

module.exports = alreadyExist;