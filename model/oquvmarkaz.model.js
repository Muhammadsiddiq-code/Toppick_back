// module.exports = (sequelize, DataTypes) => {
//   const Oquvmarkaz = sequelize.define("Oquvmarkaz", {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     // number: {
//     //     type: DataTypes.STRING,
//     //     allowNull: false,
//     //     unique: true,
//     // },
//     number: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },

//     address: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     googlemap: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//   });

//   return Oquvmarkaz;
// };















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
    number: {
      type: DataTypes.STRING, // TELEFON RAQAMI STRING GA O‘ZGARTIRILDI
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Umumiy",
    },
  });

  return Oquvmarkaz;
};
