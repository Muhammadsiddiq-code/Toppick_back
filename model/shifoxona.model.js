const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Med = sequelize.define("Med", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    googlemap: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  // oldingi User.associate qismi kerak bo'lmasa olib tashlash mumkin
  // yoki kerak bo'lsa, quyidagicha yoziladi:
  // Med.associate = (models) => {
  //     Med.belongsTo(models.Customer, {
  //         foreignKey: "customer_id",
  //         as: "customer",
  //     });
  // };

  Med.beforeSave(async (med, options) => {
    if (med.changed("name")) {
      med.name = await bcrypt.hash(med.name, 10);
    }
  });

  return Med;
};
