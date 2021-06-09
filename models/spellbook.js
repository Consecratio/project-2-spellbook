'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spellbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.spellbook.belongsTo(models.user)
      models.spellbook.belongsToMany(models.spell, { through: "spellbooks_spells" })
    }
  };
  spellbook.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'spellbook',
  });
  return spellbook;
};