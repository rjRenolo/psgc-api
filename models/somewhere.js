'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Somewhere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Somewhere.init({
    brgyName: DataTypes.STRING,
    in_region: DataTypes.STRING,
    in_province: DataTypes.STRING,
    in_municity: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Somewhere',
  });
  return Somewhere;
};