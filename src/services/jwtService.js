require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtService = {
  createToken: (user) => {
    const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
      expiresIn: '1h',
      algorithm: 'HS256',
    });
  
  return token;
},
  validateToken: (token) => {
    try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    return decode;
  } catch (err) {
    throw new Error('Token inválido');
    }
  },
};

module.exports = jwtService;