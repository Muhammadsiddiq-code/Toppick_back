const Joi = require("joi");

const createMedValidation = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  address: Joi.string().min(5).max(200).required(),
  phone: Joi.string()
    .pattern(/^[0-9]{9,12}$/)
    .required()
    .messages({
      "string.pattern.base":
        "Telefon raqam faqat raqamlardan iborat bo‘lishi kerak",
    }),
  email: Joi.string().email().required(),
});

const updateMedValidation = Joi.object({
  name: Joi.string().min(3).max(100),
  address: Joi.string().min(5).max(200),
  phone: Joi.string().pattern(/^[0-9]{9,12}$/),
  email: Joi.string().email(),
});

module.exports = {
  createMedValidation,
  updateMedValidation,
};
