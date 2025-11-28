module.exports = (sequelize, DataTypes) => {
    const swiper = sequelize.define("swiper", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
    return swiper
}