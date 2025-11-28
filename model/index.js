const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Med = require("./shifoxona.model")(sequelize, Sequelize.DataTypes);
const Admin = require("./serviceadmin.model")(sequelize, Sequelize.DataTypes);
const Restaran = require("./restaran.model")(sequelize, Sequelize.DataTypes);
const Oquvmarkaz = require("./oquvmarkaz.model")(sequelize, Sequelize.DataTypes);
const Kutubxona = require("./kutubxona.model")(sequelize, Sequelize.DataTypes);
const Swiper = require("./swiper.model")(sequelize, Sequelize.DataTypes);
module.exports = {
  sequelize,
  Sequelize,
  Med,
  Admin,
  Restaran,
  Oquvmarkaz,
  Kutubxona,
  Swiper,
};
