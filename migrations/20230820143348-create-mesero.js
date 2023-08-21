'use strict';

/** @type {import('sequelize').Sequelize} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Meseros', {
      idMesero: {
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
    await queryInterface.dropTable('Meseros');
  }
};