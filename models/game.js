'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // One to Many
      Game.hasMany(models.GameGenre, {foreignKey: "game_id"});
      // Many to Many
      Game.belongsToMany(models.Genre, {foreignKey: "game_id", through: models.GameGenre});
    }
  }
  Game.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    status: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};