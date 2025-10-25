module.exports = (sequelize, DataTypes) => {
  const Oquvmarkaz = sequelize.define("Oquvmarkaz", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // number: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    // },
    number: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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

  return Oquvmarkaz;
};
