// const Joi = require("joi");

// // 🔹 Yangi kutubxona qo‘shish
// const createKutubxonaSchema = Joi.object({
//   name: Joi.string().min(3).max(100).required().messages({
//     "string.empty": "Kutubxona nomi kiritilishi shart",
//     "string.min":
//       "Kutubxona nomi eng kamida 3 ta belgidan iborat bo‘lishi kerak",
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

// // 🔹 Kutubxona yangilash
// const updateKutubxonaSchema = Joi.object({
//   name: Joi.string().min(3).max(100),
//   number: Joi.string().pattern(/^\+998\d{9}$/),
//   address: Joi.string().min(5).max(255),
//   googlemap: Joi.string().uri(),
// }).min(1);

// module.exports = {
//   createKutubxonaSchema,
//   updateKutubxonaSchema,
// };




// models/kutubxonaValidation.js
const Joi = require('joi');

const kutubxonaSchema = Joi.object({
  name: Joi.string().min(3).max(100).required().label("Kutubxona nomi"),
  number: Joi.string().pattern(/^\+?[\d\s-]{10,}$/).required().label("Telefon raqam"),
  address: Joi.string().min(5).max(200).required().label("Manzil"),
  googlemap: Joi.string().uri().required().label("Google Maps link"),
  type: Joi.string().valid("Davlat kutubxonasi", "Xususiy kutubxona", "Universitet kutubxonasi").required().label("Kutubxona turi")
});

const validate = (data) => {
  return kutubxonaSchema.validate(data, { abortEarly: false });
};

module.exports = { validate }; // Bu muhim! Export qilish