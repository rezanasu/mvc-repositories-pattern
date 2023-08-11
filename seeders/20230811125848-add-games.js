'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Games", [
      {
        title: "Horizon Zero Dawn",
        year: 2017,
        publisher: "Guerilla Games",
        status: "active",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Sekiro Shadows Die Twice",
        year: 2019,
        publisher: "FromSoftware",
        status: "active",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Mario Kart",
        year: 2015,
        publisher: "Nintendo",
        status: "active",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
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
    await queryInterface.bulkDelete("Games", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
