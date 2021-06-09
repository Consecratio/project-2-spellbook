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
      spellName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      higherLevel: {
        type: Sequelize.STRING
      },
      range: {
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
      duration: {
        type: Sequelize.STRING
      },
      concentration: {
        type: Sequelize.BOOLEAN
      },
      castingTime: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      attackType: {
        type: Sequelize.STRING
      },
      damageType: {
        type: Sequelize.STRING
      },
      damageAtSlot: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      classes: {
        type: Sequelize.STRING
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