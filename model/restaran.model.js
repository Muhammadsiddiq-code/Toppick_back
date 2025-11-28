module.exports = (sequelize, DataTypes) => {
  const Restaran = sequelize.define("Restaran", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    googlemap: {
      type: DataTypes.TEXT, // VARCHAR(255) o'rniga TEXT
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Umumiy",
    },
  });

  return Restaran;
};
