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
   await queryInterface.bulkInsert('Spots', [
    {
      ownerId: 1,
      address: '125 N Doheny Dr #1107',
      city: 'West Hollywood',
      state: 'CA',
      country: 'USA',
      lat: 34.07598,
      lng: 118.39019,
      name: 'West Hollywood Towers',
      description: 'Condo in West Hollywood',
      price: 1000.00
    },
    {
      ownerId: 2,
      address: '1895 Hill Chase',
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      lat: 34.04150,
      lng: 84.27171,
      name: 'Hampton Hall',
      description: '3 story house with basement',
      price: 900.00
    },
    {
      ownerId: 3,
      address: '1489 Sunset Plaza Dr',
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      lat: 34.09746,
      lng: 118.38199,
      name: 'Hollywood Hills Modern Sanctuary',
      description: 'Hollywood Hills home',
      price: 2000.00
    },
    {
      ownerId: 4,
      address: '1800 Beverly Blvd',
      city: 'Los Angeles',
      state: "CA",
      country: 'USA',
      lat: 34.09738,
      lng: 117.78968,
      name: 'Dream House',
      description: 'Modern McMansion',
      price: 1200.00
    },
    {
      ownerId: 5,
      address: "2400 Roxbury Dr",
      city: "Beverly Hills",
      state: "CA",
      country: "USA",
      lat: 34.76456,
      lng: 117.39876,
      name: "Roxbury",
      description: "Condo in Beverly Hills",
      price: 900.00
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
    await queryInterface.bulkDelete('Spots')
  }
};
