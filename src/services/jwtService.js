require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'xablau';

const jwtService = {
  createToken: (user) => {
    const token = jwt.sign({ data: user }, secret, {
      expiresIn: '1h',
      algorithm: 'HS256',
    });
  
  return token;
},
  validateToken: (token, res) => {
    try {
      const decode = jwt.verify(token, secret);
      return decode;
    } catch (error) {
      res.status(401).json({ message: 'Expired or invalid token' });
      }
},
  validateUserPost: (token, res) => {
    try {
      const decode = jwt.verify(token, secret);
      return decode;
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized user' });
    }
  },
};

module.exports = jwtService;