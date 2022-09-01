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
   await queryInterface.bulkInsert('ReviewImages', [
    {
      reviewId: 1,
      url: "https://www.airbnb.com/reviewdoheny"
    },
    {
      reviewId: 2,
      url: "https://www.airbnb.com/reviewhillchase"
    },
    {
      reviewId: 3,
      url: "https://www.airbnb.com/reviewsunset"
    },
    {
      reviewId: 4,
      url: "https://www.airbnb.com/reviewbeverly"
    },
    {
      reviewId: 5,
      url: "https://www.airbnb.com/reviewroxbury"
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
    await queryInterface.bulkDelete('ReviewImages')
  }
};
