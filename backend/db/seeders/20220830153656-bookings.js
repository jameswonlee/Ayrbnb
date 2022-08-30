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
   await queryInterface.bulkInsert('Bookings', [
    {
      spotId: 1,
      userId: 1,
      startDate: "2022-10-01",
      endDate: "2022-10-03"
    },
    {
      spotId: 2,
      userId: 2,
      startDate: "2022-12-23",
      endDate: "2022-12-26"
    },
    {
      spotId: 3,
      userId: 3,
      startDate: "2022-12-31",
      endDate: "2023-01-02"
    },
    {
      spotId: 4,
      userId: 4,
      startDate: "2023-01-01",
      endDate: "2023-01-08"
    },
    {
      spotId: 5,
      userId: 5,
      startDate: "2022-12-01",
      endDate: "2022-12-30"
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
    await queryInterface.bulkDelete('Bookings')
  }
};
