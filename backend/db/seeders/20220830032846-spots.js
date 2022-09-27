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
      country: 'United States',
      lat: 34.07598,
      lng: 118.39019,
      name: 'Tomoko Home',
      description: 'LUX Villa w Pool',
      price: 1223.00
    },
    {
      ownerId: 2,
      address: "1000 Pacific Coast Hwy",
      city: "Newport Beach",
      state: "CA",
      country: 'United States',
      lat: 34.28473,
      lng: 117.82746,
      name: "Newport",
      description: "Dream House w Breathtaking Views",
      price: 1388.00
    },
    {
      ownerId: 3,
      address: '1895 Beach Suite',
      city: 'Malibu',
      state: 'CA',
      country: 'United States',
      lat: 34.04150,
      lng: 184.27171,
      name: 'Carbon Beach Retreat',
      description: 'Beach Suite in Malibu',
      price: 851.00
    },
    {
      ownerId: 4,
      address: '1489 Sunset Plaza Dr',
      city: 'Los Angeles',
      state: 'CA',
      country: 'United States',
      lat: 34.09746,
      lng: 118.38199,
      name: 'Villa',
      description: 'Luxurious home with pool',
      price: 1890.00
    },
    {
      ownerId: 5,
      address: '1800 Beverly Blvd',
      city: 'Los Angeles',
      state: "CA",
      country: 'United States',
      lat: 34.09738,
      lng: 117.78968,
      name: 'Villa in Los Angeles',
      description: 'Modern McMansion',
      price: 1200.00
    },
    {
      ownerId: 6,
      address: "2400 Roxbury Dr",
      city: "Los Angeles",
      state: "CA",
      country: 'United States',
      lat: 34.76456,
      lng: 117.39876,
      name: "Roxbury",
      description: "Hollywood Hills Modern Sanctuary",
      price: 1650.00
    },
    {
      ownerId: 7,
      address: "8080 Malibu Canyon Pkwy",
      city: "Malibu",
      state: "CA",
      country: 'United States',
      lat: 35.37463,
      lng: 118.82847,
      name: "Barefoot Malibu",
      description: "Modern Mediterranean Villa on the sand",
      price: 2500.00
    },
    {
      ownerId: 8,
      address: '8989 Laurel Canyon Rd',
      city: "Los Angeles",
      state: 'CA',
      country: "United States",
      lat: 36.83674,
      lng: 117.98283,
      name: 'Hollywood Home',
      description: 'Home on the hill',
      price: 2620.00
    },
    {
      ownerId: 9,
      address: '1200 Santa Monica Blvd',
      city: 'West Hollywood',
      state: 'CA',
      country: 'United States',
      lat: 36.48575,
      lng: 118.92837,
      name: 'WeHo Villa',
      description: 'Private Villa',
      price: 1290.00
    },
    {
      ownerId: 10,
      address: '3500 Sunset Blvd',
      city: 'Los Angeles',
      state: 'CA',
      country: 'United States',
      lat: 37.84938,
      lng: 117.83748,
      name: 'Alfred',
      description: 'Modern Alfred Villa w Pool, Spa, and Gym',
      price: 1499.00
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
