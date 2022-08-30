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
      address: '125 N Doheny Dr',
      city: 'West Hollywood',
      state: 'CA',
      country: 'USA',
      lat: 34.07598,
      lng: 118.39019,
      name: 'West Hollywood Towers',
      description: 'Home in West Hollywood',
      price: 1500.00
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
      price: 1000.00
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
      price: 10000.00
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
