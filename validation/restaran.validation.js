const Joi = require("joi");

const createRestaranValidation = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  address: Joi.string().min(5).max(200).required(),
  number: Joi.string()
    .pattern(/^[0-9]{9,12}$/)
    .required()
    .messages({
      "string.pattern.base": "Telefon raqam noto‘g‘ri formatda",
    }),
  googlemap: Joi.string().uri().required().messages({
    "string.uri": "Google Map havola formati noto‘g‘ri",
  }),
});

const updateRestaranValidation = Joi.object({
  name: Joi.string().min(3).max(100),
  address: Joi.string().min(5).max(200),
  number: Joi.string().pattern(/^[0-9]{9,12}$/),
  googlemap: Joi.string().uri(),
});

module.exports = {
  createRestaranValidation,
  updateRestaranValidation,
};
