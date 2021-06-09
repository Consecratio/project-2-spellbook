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
    spellName: DataTypes.STRING,
    description: DataTypes.STRING,
    higherLevel: DataTypes.STRING,
    range: DataTypes.STRING,
    components: DataTypes.STRING,
    material: DataTypes.STRING,
    ritual: DataTypes.BOOLEAN,
    duration: DataTypes.STRING,
    concentration: DataTypes.BOOLEAN,
    castingTime: DataTypes.STRING,
    level: DataTypes.INTEGER,
    attackType: DataTypes.STRING,
    damageType: DataTypes.STRING,
    damageAtSlot: DataTypes.STRING,
    school: DataTypes.STRING,
    classes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'spell',
  });
  return spell;
};