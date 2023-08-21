'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mesero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Mesero.init({
    idMesero:  {type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false},
    nombre: {type: DataTypes.STRING,
             allowNull: false,
             validate:{
                      len: [0, 150],
                    }
             },
    apellidos: {type: DataTypes.STRING,
                allowNull: false,
                validate:{
                          len: [0, 150],
                        }
                },
  }, {
    sequelize,
    modelName: 'Mesero',
  });
  return Mesero;
};