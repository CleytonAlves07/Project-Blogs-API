const jwtService = require('../services/jwtService');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
      if (!authorization) {
       res.status(401).json({ message: 'Token not found' });
      }
  const verify = jwtService.validateToken(authorization, res);
      
  req.user = verify.data;
  next();
};

module.exports = auth;