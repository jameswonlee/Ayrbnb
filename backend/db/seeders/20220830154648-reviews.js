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
      userId: 10,
      review: "Lovely home in West Hollywood!",
      stars: 5
    },
    {
      spotId: 2,
      userId: 9,
      review: "Nice spacious home on the beach",
      stars: 5
    },
    {
      spotId: 3,
      userId: 8,
      review: "Luxury home on the beach!",
      stars: 5
    },
    {
      spotId: 4,
      userId: 7,
      review: "Dream home. Dream pool!",
      stars: 5
    },
    {
      spotId: 5,
      userId: 6,
      review: "Luxurious home with a pool!",
      stars: 5
    },
    {
      spotId: 6,
      userId: 5,
      review: "Stunning views",
      stars: 5
    },
    {
      spotId: 7,
      userId: 4,
      review: "Spectacular view of the ocean",
      stars: 5
    },
    {
      spotId: 8,
      userId: 3,
      review: "Gorgeous views",
      stars: 5
    },
    {
      spotId: 9,
      userId: 2,
      review: "Tastefully designed",
      stars: 5
    },
    {
      spotId: 10,
      userId: 1,
      review: "Very clean and nice host",
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
