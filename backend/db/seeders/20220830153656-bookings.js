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
      userId: 2,
      startDate: new Date("2022-10-01"),
      endDate: new Date("2022-10-03"),
      numGuests: 2
    },
    {
      spotId: 2,
      userId: 2,
      startDate: new Date("2022-12-23"),
      endDate: new Date("2022-12-26"),
      numGuests: 5
    },
    {
      spotId: 3,
      userId: 3,
      startDate: new Date("2023-02-17"),
      endDate: new Date("2023-02-19"),
      numGuests: 4
    },
    {
      spotId: 4,
      userId: 4,
      startDate: new Date("2023-02-03"),
      endDate: new Date("2023-02-06"),
      numGuests: 8
    },
    {
      spotId: 5,
      userId: 5,
      startDate: new Date("2023-05-05"),
      endDate: new Date("2023-05-08"),
      numGuests: 10
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
