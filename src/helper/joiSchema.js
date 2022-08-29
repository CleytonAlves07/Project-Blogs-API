const Joi = require('joi');

const schema = Joi.object({
  displayName: Joi.string()
    .min(8)
    .max(100)
    .required()
    .messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string()
    .email()
    .required()
    .messages({
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string()
    .min(6)
    .max(100)
    .required()
.messages({
    'string.min': '"password" length must be at least 6 characters long', 
  }),
});

module.exports = schema;
