'use strict';

/** @type {import('sequelize').Sequelize} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
      idCliente: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [0, 150],
        },
      },
      apellidos: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [0, 150],
        },
      },
      rfc: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [13],
        },
      },
      calle: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [0, 150],
        },
      },
      numExt: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [0, 30],
        },
      },
      numInt: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [0, 30],
        },
      },
      colonia: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [0, 150],
        },
      },
      municipio: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [0, 150],
        },
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [0, 150],
        },
      },
      zipCode: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [5],
        },
      },
      montoTotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      idFactura: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Facturas',
          key: 'idFactura',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clientes');
  },
};