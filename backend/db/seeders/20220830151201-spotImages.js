'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('SpotImages', [
    {
      spotId: 1,
      url: "https://unsplash.com/photos/pTyRRbjf1cY",
      preview: true
    },
    {
      spotId: 2,
      url: "https://unsplash.com/photos/2d4lAQAlbDA",
      preview: true
    },
    {
      spotId: 3,
      url: "https://unsplash.com/photos/4ETshgrhbJw",
      preview: true
    },
    {
      spotId: 4,
      url: "https://unsplash.com/photos/GGupkreKwxA",
      preview: true
    },
    {
      spotId: 5,
      url: "https://unsplash.com/photos/RFDP7_80v5A",
      preview: true
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SpotImages')
  }
};
