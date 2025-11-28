// const Joi = require("joi");

// // 🔹 Yangi o‘quv markaz qo‘shish
// const createOquvmarkazSchema = Joi.object({
//   name: Joi.string().min(3).max(100).required().messages({
//     "string.empty": "Markaz nomi kiritilishi shart",
//     "string.min": "Markaz nomi eng kamida 3 ta belgidan iborat bo‘lishi kerak",
//   }),
//   number: Joi.string()
//     .pattern(/^\+998\d{9}$/)
//     .required()
//     .messages({
//       "string.pattern.base":
//         "Telefon raqami +998 bilan boshlanishi va 12 belgidan iborat bo‘lishi kerak",
//     }),
//   address: Joi.string().min(5).max(255).required().messages({
//     "string.empty": "Manzil kiritilishi shart",
//   }),
//   googlemap: Joi.string().uri().required().messages({
//     "string.uri": "Google Map manzili to‘g‘ri URL formatida bo‘lishi kerak",
//   }),
// });

// // 🔹 O‘quv markaz yangilash
// const updateOquvmarkazSchema = Joi.object({
//   name: Joi.string().min(3).max(100),
//   number: Joi.string().pattern(/^\+998\d{9}$/),
//   address: Joi.string().min(5).max(255),
//   googlemap: Joi.string().uri(),
// }).min(1); // Kamida bitta maydon bo‘lishi kerak

// module.exports = {
//   createOquvmarkazSchema,
//   updateOquvmarkazSchema,
// };





// const Joi = require("joi");

// const createOquvmarkazSchema = Joi.object({
//   name: Joi.string().min(3).max(100).required(),
//   number: Joi.string()
//     .pattern(/^\+998\d{9}$/)
//     .required(),
//   address: Joi.string().min(5).required(),
//   googlemap: Joi.string().uri().required(),
// });

// exports.validate = (data) => createOquvmarkazSchema.validate(data);





const Joi = require("joi");

const baseSchema = {
  name: Joi.string().min(3).max(100),
  number: Joi.string()
    .pattern(/^\+998\d{9}$/)
    .messages({
      "string.pattern.base": "Telefon raqami +998 bilan boshlanishi kerak",
    }),
  address: Joi.string().min(5).max(255),
  googlemap: Joi.string().uri(),
  type: Joi.string().min(3).max(100),
};

const createOquvmarkazSchema = Joi.object({
  ...baseSchema,
  name: baseSchema.name.required(),
  number: baseSchema.number.required(),
  address: baseSchema.address.required(),
  googlemap: baseSchema.googlemap.required(),
  type: baseSchema.type.required(),
});

const updateOquvmarkazSchema = Joi.object(baseSchema).min(1);

module.exports = {
  validateCreate: (data) => createOquvmarkazSchema.validate(data),
  validateUpdate: (data) => updateOquvmarkazSchema.validate(data),
};
