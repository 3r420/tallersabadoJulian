'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class habitaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  habitaciones.init({
    precio_por_noche: DataTypes.FLOAT,
    piso: DataTypes.FLOAT,
    max_personas: DataTypes.FLOAT,
    tiene_cama_debe: DataTypes.STRING,
    tien_ducha: DataTypes.STRING,
    tiene_baño: DataTypes.STRING,
    tiene_balcon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'habitaciones',
  });
  return habitaciones;
};