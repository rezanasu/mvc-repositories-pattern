'use strict';
const {Game} = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    const genres = await queryInterface.bulkInsert('Genres', [
      {
        title: "Adventure",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "RPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Racing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Casual",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})


    const adventure = genres[0];
    const rpg = genres[1];
    const racing = genres[2];
    const casual = genres[3];

    const games = await Game.findAll()
    const horizon = games[0];
    const sekiro = games[1];
    const mario = games[2]

    await queryInterface.bulkInsert("GameGenres", [
      {
        game_id: horizon.id,
        genre_id: adventure.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        game_id: horizon.id,
        genre_id: rpg.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        game_id: sekiro.id,
        genre_id: adventure.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        game_id: sekiro.id,
        genre_id: rpg.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        game_id: mario.id,
        genre_id: racing.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        game_id: mario.id,
        genre_id: casual.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Genres", null, {})
    await queryInterface.bulkDelete("GameGenres", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
