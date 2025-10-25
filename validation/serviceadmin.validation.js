const Joi = require("joi");

const createAdminValidation = Joi.object({
  login: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Login bo‘sh bo‘lmasligi kerak",
    "any.required": "Login kiritilishi shart",
  }),
  password: Joi.string().min(6).max(100).required().messages({
    "string.min": "Parol kamida 6 ta belgidan iborat bo‘lishi kerak",
    "any.required": "Parol kiritilishi shart",
  }),
});

const updateAdminValidation = Joi.object({
  login: Joi.string().min(3).max(30),
  password: Joi.string().min(6).max(100),
});

module.exports = {
  createAdminValidation,
  updateAdminValidation,
};
