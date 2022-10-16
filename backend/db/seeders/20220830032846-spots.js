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
      description: "Tucked away in LA's peaceful Franklin Hills neighborhood, this modern 3 story estate is the perfect place for your next getaway. This lux 4BR home features a gourmet kitchen, home theater, modern gym and private backyard.",
      price: 1629.00
    },
    {
      ownerId: 2,
      address: "1000 Pacific Coast Hwy",
      city: "Newport Beach",
      state: "CA",
      country: 'United States',
      lat: 34.28473,
      lng: 117.82746,
      name: "Newport Beach Oceanfront Luxury Home",
      description: "Enjoy paradise found in this luxury, oceanfront beach house. This beautiful home is a visual masterpiece, offering panoramic ocean views, Balboa Pier, Catalina Island, the Newport Beach coastline, and the most beautiful sunsets you will ever witness. The contemporary open floor plan includes every modern convenience providing you and your family the ultimate 5 star experience.",
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
      name: "Oceanfront Villa with sauna and private beach",
      description: "Oceanfront Villa is located 20 minutes from the closest and most convenient private airport to Malibu. Featuring staggering panoramic ocean views and direct access to a quiet private beach. Behind the gate lies a private courtyard with a Panoramic View Barrel Sauna, a large jacuzzi, and 2 massive outdoor decks overlooking the Pacific Ocean with a large built-in fireplace on the rooftop deck.",
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
    },
    {
      ownerId: 1,
      address: '2020 Mulholland Dr',
      city: 'Los Angeles',
      state: 'CA',
      country: 'United States',
      lat: 35.83746,
      lng: 117.73646,
      name: 'Premier Villa',
      description: "Multi-Million Mulholland Dr Getaway w/ infinity pool",
      price: 1624.00
    },
    {
      ownerId: 2,
      address: '3480 Benedict Canyon Dr',
      city: 'Los Angeles',
      state: 'CA',
      country: 'United States',
      lat: 36.28748,
      lng: 118.82736,
      name: 'Luxury Home',
      description: 'Modern 3-story estate in Franklin Hills',
      price: 1717.00
    },
    {
      ownerId: 3,
      address: '2484 N Bedford Dr',
      city: 'Beverly Hills',
      state: 'CA',
      country: 'United States',
      lat: 35.73656,
      lng: 117.18171,
      name: 'Beverly Hills Villa',
      description: 'Mid-century architectural home with sweeping DTLA to ocean views!',
      price: 1439.00
    },
    {
      ownerId: 4,
      address: '9480 Hutton Dr',
      city: 'Hollywood',
      state: 'CA',
      country: 'United States',
      lat: 36.83746,
      lng: 118.82747,
      name: 'Hollywood Hills Sanctuary',
      description: 'Sleek 3 level villa in the Hollywood Hills',
      price: 2467.00
    },
    {
      ownerId: 5,
      address: '2484 Arby Dr',
      city: 'Beverly Hills',
      state: 'CA',
      country: 'United States',
      lat: 36.84756,
      lng: 118.83747,
      name: 'Beverly Hills Estate With Breathtaking views',
      description: 'This new contemporary estate was constructed using the finest materials featuring breathtaking views of the city from DTLA to the ocean from nearly every room in the house. Designed to exemplify the beauty of organic elements, this architectural triumph is perched high up on the hillside in the coveted Beverly Hills area.',
      price: 6500.00
    },
    {
      ownerId: 1,
      address: "2484 Sunset Plaza Dr",
      city: "West Hollywood",
      state: "CA",
      country: "United States",
      lat: 36.27364,
      lng: 118.38374,
      name: "LUXURY HOME",
      description: "Luxury home with pool & spa, theater, and city views",
      price: 1223.00
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
