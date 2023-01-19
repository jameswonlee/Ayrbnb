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
      lng: -118.39019,
      name: 'Tomoko Home | Pool & Spa | Theater | City Views',
      description: "Tucked away in LA's peaceful Franklin Hills neighborhood, this modern 3 story estate is the perfect place for your next getaway. This lux 4BR home features a gourmet kitchen, home theater, modern gym and private backyard.",
      price: 1629.00
    },
    {
      ownerId: 11,
      address: "3709 Ocean Blvd",
      city: "Newport Beach",
      state: "CA",
      country: 'United States',
      lat: 33.59137,
      lng: -117.87073,
      name: "Newport Beach Oceanfront Luxury Home",
      description: "Enjoy paradise found in this luxury, oceanfront beach house. This beautiful home is a visual masterpiece, offering panoramic ocean views, Balboa Pier, Catalina Island, the Newport Beach coastline, and the most beautiful sunsets you will ever witness. The contemporary open floor plan includes every modern convenience providing you and your family the ultimate 5 star experience.",
      price: 1388.00
    },
    {
      ownerId: 3,
      address: '23672 Malibu Colony Rd',
      city: 'Malibu',
      state: 'CA',
      country: 'United States',
      lat: 34.03286,
      lng: -118.69104,
      name: 'Malibu Beach Oasis',
      description: "This Malibu Beach Oasis has easy access to the ocean, amazing views, and the privacy that your A-listers will appreciate. With 18-foot ceilings and massive openings to ocean-facing terraces, this sprawling beach house is the perfect place to host. Strap in for refreshing dips in the pool, a friendly competition in the game room, and incredible sunsets. In the morning, hit the home gym or just relax in the theatre.",
      price: 5260.00
    },
    {
      ownerId: 4,
      address: '1490 Sunset Plaza Dr',
      city: 'Los Angeles',
      state: 'CA',
      country: 'United States',
      lat: 34.09752,
      lng: -118.38157,
      name: 'West Hollywood Modern Luxury 5 BR Villa w/ Pool',
      description: "Stunning luxury Villa in the heart of West Hollywood. Centrally located to all the best attractions, entertainment, restaurants and shopping! Beautiful professionally designed 5 bedroom, 6.5 bath Villa sleeps 10 & features a distinctive blend of modern style with Hollywood glamour. Amenities include a secluded private backyard with a salt water pool, hot tub, BBQ grill, outdoor fireplace and al fresco dining.",
      price: 1890.00
    },
    {
      ownerId: 5,
      address: '1365 N Wetherly Dr',
      city: 'Los Angeles',
      state: "CA",
      country: 'United States',
      lat: 34.09543,
      lng: -118.38864,
      name: 'Hollywood Hills Glam Paradise w/ Pool & Views',
      description: "Located high atop the star-studded Sunset Plaza Drive only minutes away from Beverly Hills and Rodeo Drive, this luxurious masterpiece offers unparalleled panoramic views of LA and stretches all the way to the Pacific Ocean. Indoor/outdoor living room experience with a lush master suite and luxurious guest bedrooms each equipped with full shower bathrooms.",
      price: 1200.00
    },
    {
      ownerId: 6,
      address: "1546 N Viewsite Terr",
      city: "Los Angeles",
      state: "CA",
      country: 'United States',
      lat: 34.09921,
      lng: -118.38236,
      name: "Hollywood Hills Modern Sanctuary | Jaw Dropping View",
      description: "Modern construction, 6,500 sqft, Hollywood Hills Sanctuary home perfect for 12 guests. Featuring new jetted hot tub, pool table, theater, 5 bedrooms with en suite bathrooms, 6 baths, several view-side balconies, rooftop hot tub, 2 car garage + 3 car driveway (parking for 6 on property)",
      price: 1650.00
    },
    {
      ownerId: 1,
      address: '1105 San Ysidro Dr',
      city: 'Beverly Hills',
      state: 'CA',
      country: 'United States',
      lat: 34.08847,
      lng: -118.42175,
      name: 'Beverly Hills Estate With Breathtaking Views',
      description: 'This new contemporary estate was constructed using the finest materials featuring breathtaking views of the city from DTLA to the ocean from nearly every room in the house. Designed to exemplify the beauty of organic elements, this architectural triumph is perched high up on the hillside in the coveted Beverly Hills area.',
      price: 6500.00
    },
    {
      ownerId: 8,
      address: '1300 Carla Ln',
      city: "Los Angeles",
      state: 'CA',
      country: "United States",
      lat: 36.09642,
      lng: -118.40011,
      name: 'Modern Sunset - Hollywood Home | Spectacular Views',
      description: "This modern masterpiece sits minutes from the iconic Sunset Strip with unobstructed views stretching from West Hollywood to the Pacific Ocean. This newly renovated 5 bed, 6 bath estate offers luxury lined living.",
      price: 2620.00
    },
    {
      ownerId: 9,
      address: '541 N Crescent Heights Blvd',
      city: 'West Hollywood',
      state: 'CA',
      country: 'United States',
      lat: 34.08129,
      lng: -118.36617,
      name: 'The Masterpiece Melrose Villa',
      description: "Modern Masterpiece showcasing contemporary architectural design with quality craftsmanship. Situated near Melrose, it is walking distance to some of LA's essential dining spots. Smart home automation by Control4, built-in surround sound system, intercom, and LED energy-efficient lighting. Experience the open floor plan with seamless indoor-outdoor transition via a Fleetwood luxury multi-slide and pocket door, Italian kitchen cabinets, high-end German appliances by Miele.",
      price: 1290.00
    },
    {
      ownerId: 10,
      address: '9370 Monte Leon Ln',
      city: 'Los Angeles',
      state: 'CA',
      country: 'United States',
      lat: 34.08832,
      lng: -118.39712,
      name: 'White Modern Villa - with BBQ/pool',
      description: "This stylish and cozy 5 bedroom, 4.5 bath home family-friendly villa located near Beverly Hills, Rodeo Dr and The Grove offers everything you need in a home. Equipped with open space kitchen, high ceilings, modern appliances, pool, a home décor with an attention to detail and everything your heart desires! 1 bedroom is in a separate guest house w/ kitchen with a private patio door that can lead to the pool. It's the perfect home for families & travelers looking for a clean and cozy home in LA.",
      price: 1499.00
    },
    {
      ownerId: 1,
      address: '3720 Eureka Dr',
      city: 'Studio City',
      state: 'CA',
      country: 'United States',
      lat: 34.13772,
      lng: -118.37352,
      name: "Multi-Million Mulholland Dr Getaway w/ infinity pool",
      description: "This is the house of your dreams with views of Los Angeles from both sides. Included in the house is a gym, high powered steam room, double driveways, and the perfect infinity pool. Our spacious outdoor area also has a BBQ station, dining table, and modern fireplaces. If your looking for style and comfort you are gonna want to stay here. We offer WIFI, indoor and outdoors TV with all your favorite streaming services, and a surround sound SONOS system.",
      price: 1624.00
    },
    {
      ownerId: 2,
      address: '1546 N Viewsite Terr',
      city: 'Los Angeles',
      state: 'CA',
      country: 'United States',
      lat: 34.09925,
      lng: -118.38235,
      name: 'Villa Blue',
      description: "One of the most coveted properties available, offering unparalleled views & proximity to the legendary Sunset Strip. Enjoy the senses in every room, all upon a flowing indoor-outdoor floor plan. No corner was cut in achieving unrivaled scale & quality, swathed in the best money can buy.",
      price: 4000.00
    },
    {
      ownerId: 3,
      address: '911 N Bedford Dr',
      city: 'Beverly Hills',
      state: 'CA',
      country: 'United States',
      lat: 34.08004,
      lng: -118.41803,
      name: 'MODERN BEVERLY HILLS ESTATE | POOL AND SPA | THEATER',
      description: "Experience luxury and serenity throughout this modern new construction home in the heart of coveted Beverly Grove. This privately gated home sits steps away from LA's most favored dining and shopping experiences. Mid-century architectural home with sweeping DTLA to ocean views!",
      price: 1439.00
    },
    {
      ownerId: 4,
      address: '2867 Beldon Dr',
      city: 'Hollywood',
      state: 'CA',
      country: 'United States',
      lat: 34.12170,
      lng: -118.32312,
      name: '♛ MODERN LUXURY W/ HUGE ROOFTOP, SHOPS, CULTURE ❀',
      description: "Welcome to heaven! Escape to a 2,000 foot roof top deck with a BBQ for a night in the comfort of the home or to your backyard with a Cabana, a movie theatre, & Baja pool for the perfect relaxation. Complete with a smart home system, smart Sonos music and lighting, formal entry/gated. Furniture has been updated and a new movie theatre has been built since the photos were taken.",
      price: 2467.00
    },
    {
      ownerId: 7,
      address: "23538 Malibu Colony Rd",
      city: "Malibu",
      state: "CA",
      country: 'United States',
      lat: 34.03207,
      lng: -118.68769,
      name: "Oceanfront Villa with sauna and private beach",
      description: "Oceanfront Villa is located 20 minutes from the closest and most convenient private airport to Malibu. Featuring staggering panoramic ocean views and direct access to a quiet private beach. Behind the gate lies a private courtyard with a Panoramic View Barrel Sauna, a large jacuzzi, and 2 massive outdoor decks overlooking the Pacific Ocean with a large built-in fireplace on the rooftop deck.",
      price: 2500.00
    },
    {
      ownerId: 1,
      address: "350 N Kilkea Dr",
      city: "West Hollywood",
      state: "CA",
      country: "United States",
      lat: 34.07763,
      lng: -118.36659,
      name: "Modern Luxury Home",
      description: "This ultra-modern retreat has spacious bedrooms, high ceilings and floor to ceiling windows throughout. Perfect for family get togethers, a work group or a retreat with friends. Enjoy the modern decor, unique finishes and overall a quality experience!",
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
