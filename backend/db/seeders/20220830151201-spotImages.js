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
      url: "https://www.airbnb.com/doheny",
      preview: true
    },
    {
      spotId: 2,
      url: "https://www.airbnb.com/hillchase",
      preview: true
    },
    {
      spotId: 3,
      url: "https://www.airbnb.com/sunset",
      preview: true
    },
    {
      spotId: 4,
      url: "https://www.airbnb.com/beverly",
      preview: true
    },
    {
      spotId: 5,
      url: "https://www.airbnb.com/roxbury",
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
