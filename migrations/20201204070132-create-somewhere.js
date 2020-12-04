'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Somewheres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brgyName: {
        type: Sequelize.STRING
      },
      in_region: {
        type: Sequelize.STRING
      },
      in_province: {
        type: Sequelize.STRING
      },
      in_municity: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Somewheres');
  }
};