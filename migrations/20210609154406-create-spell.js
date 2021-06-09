'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('spells', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      range: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      castingTime: {
        type: Sequelize.STRING
      },
      classes: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      components: {
        type: Sequelize.STRING
      },
      material: {
        type: Sequelize.STRING
      },
      ritual: {
        type: Sequelize.BOOLEAN
      },
      concentration: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('spells');
  }
};