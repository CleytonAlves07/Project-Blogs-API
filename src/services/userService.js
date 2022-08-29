const { User } = require('../database/models');
const alreadyExist = require('../middlewares/checkUser');
const schema = require('../helper/joiSchema');

const userService = async (displayName, email, password, image) => {
  const exist = await alreadyExist(email);
  if (exist.status) return exist;
  const { error } = schema.validate({ displayName, email, password });
  if (error) {
    console.log(error);
    return {
      status: 400,
      data: error.details[0].message,
    };
  }
  const user = await User.create({ displayName, email, password, image });
  return {
    status: 201,
    data: {
      user,
    },
  };
};

module.exports = userService;