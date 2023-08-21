'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Factura.init({
    idFactura: {type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,},

    fecha: {type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW, 
            },

    idMesero: {type: DataTypes.INTEGER,
               references:{
                model: 'meseros',
                key: 'idMesero',
               }},
    mesa: {type: DataTypes.INTEGER,
            allowNull: false},
        
    subTotal: {type: DataTypes.FLOAT,
               allowNull: false},
            
    total: {type: DataTypes.FLOAT,
               allowNull: false},
  }, {
    sequelize,
    modelName: 'Factura',
  });
  return Factura;
};
