'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spellbooks_spells extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  spellbooks_spells.init({
    spellbookId: DataTypes.INTEGER,
    spellId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'spellbooks_spells',
  });
  return spellbooks_spells;
};