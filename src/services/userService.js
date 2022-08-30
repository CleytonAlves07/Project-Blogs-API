const { User } = require('../database/models');
const alreadyExist = require('../middlewares/checkUser');
const schema = require('../helper/joiSchema');
const jwtService = require('./jwtService');

const createUserService = async (displayName, email, password, image) => {
  const isValid = schema.validate({ displayName, email, password });
  if (isValid.error) {
    return {
      status: 400,
      message: isValid.error.details[0].message,
    };
  }
  const exist = await alreadyExist(email);
  if (exist.status) return exist;
  const user = await User.create({ displayName, email, password, image });
  const token = jwtService.createToken(user);
  return {
    status: 201,
    token,
  };
};

const getAllUserService = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });

  return {
    status: 200,
    users,
  };
};

module.exports = {
  createUserService,
  getAllUserService,
};