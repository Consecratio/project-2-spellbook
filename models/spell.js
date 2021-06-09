'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.spell.belongsToMany(models.spellbook, { through: "spellbooks_spells" })
    }
  };
  spell.init({
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    range: DataTypes.STRING,
    duration: DataTypes.STRING,
    castingTime: DataTypes.STRING,
    classes: DataTypes.STRING,
    description: DataTypes.STRING,
    components: DataTypes.STRING,
    material: DataTypes.STRING,
    ritual: DataTypes.BOOLEAN,
    concentration: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'spell',
  });
  return spell;
};