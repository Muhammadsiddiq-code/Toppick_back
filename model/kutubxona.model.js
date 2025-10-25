module.exports = (sequelize, DataTypes) => {
  const Kutubxona = sequelize.define("Kutubxona", {
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
    },
    googlemap: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Kutubxona;
};
