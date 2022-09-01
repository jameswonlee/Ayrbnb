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
   await queryInterface.bulkInsert('Reviews', [
    {
      spotId: 1,
      userId: 1,
      review: "Lovely home in West Hollywood!",
      stars: 5
    },
    {
      spotId: 2,
      userId: 2,
      review: "Nice spacious home in the heart of Atlanta",
      stars: 5
    },
    {
      spotId: 3,
      userId: 3,
      review: "Breathingtaking views!",
      stars: 5
    },
    {
      spotId: 4,
      userId: 4,
      review: "Dream home!",
      stars: 5
    },
    {
      spotId: 5,
      userId: 5,
      review: "Luxurious condo in BH",
      stars: 5
    },
    {
      spotId: 6,
      userId: 6,
      review: "AA is home!",
      stars: 5
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
    await queryInterface.bulkDelete('Reviews')
  }
};
