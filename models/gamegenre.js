'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Many to One
      GameGenre.belongsTo(models.Game, {foreignKey: "game_id"});
      GameGenre.belongsTo(models.Genre, {foreignKey: "genre_id"});
    }
  }
  GameGenre.init({
    game_id: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameGenre',
  });
  return GameGenre;
};