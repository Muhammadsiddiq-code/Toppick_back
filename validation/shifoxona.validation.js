// const Joi = require("joi");

// const createMedValidation = Joi.object({
//   name: Joi.string().min(3).max(100).required(),
//   address: Joi.string().min(5).max(200).required(),
//   phone: Joi.string()
//     .pattern(/^[0-9]{9,12}$/)
//     .required()
//     .messages({
//       "string.pattern.base":
//         "Telefon raqam faqat raqamlardan iborat bolishi kerak",
//     }),
//   email: Joi.string().email().required(),
// });

// const updateMedValidation = Joi.object({
//   name: Joi.string().min(3).max(100),
//   address: Joi.string().min(5).max(200),
//   phone: Joi.string().pattern(/^[0-9]{9,12}$/),
//   email: Joi.string().email(),
// });

// module.exports = {
//   createMedValidation,
//   updateMedValidation,
// };









const Joi = require("joi");

const createMedValidation = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  address: Joi.string().min(5).max(200).required(),
  number: Joi.string()
    .pattern(/^[0-9+]{9,13}$/)
    .required()
    .messages({
      "string.pattern.base":
        "Telefon raqam faqat raqamlardan iborat bo‘lishi kerak",
    }),
  googlemap: Joi.string().uri().required(),
  email: Joi.string().email().required(),
  type: Joi.string().min(2).max(100).required(),
});

const updateMedValidation = Joi.object({
  name: Joi.string().min(3).max(100),
  address: Joi.string().min(5).max(200),
  number: Joi.string().pattern(/^[0-9+]{9,13}$/),
  googlemap: Joi.string().uri(),
  email: Joi.string().email(),
  type: Joi.string().min(2).max(100),
});

module.exports = {
  createMedValidation,
  updateMedValidation,
};
