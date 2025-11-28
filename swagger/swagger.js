// const swaggerJSDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Express API with Swagger",
//       version: "1.0.0",
//     },
//   },
//   apis: ["./routes/*.js"],
// };

// const swaggerSpec = swaggerJSDoc(options);

// const setupSwagger = (app) => {
//   app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// };

// module.exports = setupSwagger;








// backend/swagger/swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TopPick API",
      version: "1.0.0",
      description: "TopPick loyihasi uchun Swagger hujjatlari",
    },
    servers: [
      {
        url: "http://localhost:5577",
      },
    ],
  },
  apis: ["./routes/*.js"], // route fayllarni avtomatik o‘qiydi
};

const swaggerSpec = swaggerJsDoc(options);

function setupSwagger(app) {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
