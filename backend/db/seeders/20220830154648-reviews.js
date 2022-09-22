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
      review: "Nice spacious home on the beach",
      stars: 5
    },
    {
      spotId: 3,
      userId: 3,
      review: "Luxury home on the beach!",
      stars: 5
    },
    {
      spotId: 4,
      userId: 4,
      review: "Dream home. Dream pool!",
      stars: 5
    },
    {
      spotId: 5,
      userId: 5,
      review: "Luxurious home with a pool!",
      stars: 5
    },
    {
      spotId: 6,
      userId: 6,
      review: "Stunning views",
      stars: 5
    },
    {
      spotId: 7,
      userId: 7,
      review: "Spectacular view of the ocean",
      stars: 5
    },
    {
      spotId: 8,
      userId: 8,
      review: "Gorgeous views",
      stars: 5
    },
    {
      spotId: 9,
      userId: 9,
      review: "Tastefully designed"
    },
    {
      spotId: 10,
      userId: 9,
      review: "Very clean and nice host"
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
