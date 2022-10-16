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
      review: "No other word than spectacular can describe this home. It's design, build and decor. The location and views are fantastic. The care and maintenance is impeccable. And turns out, the owner James, is an amazing coder!",
      stars: 4
    },
    {
      spotId: 1,
      userId: 9,
      review: "Amazing property with great views of the Hollywood sign. Great spacious bedrooms. The sauna in the master bathroom was just everything! This house is a chef's dream. There's literally every appliance you could possibly dream of. I will definitely be staying here again soon. Thank you for the gracious hospitality!",
      stars: 5
    },
    {
      spotId: 1,
      userId: 8,
      review: "This house is amazing, exactly as described and there is even a view of the Hollywood sign. It's an incredibly spacious house and very comfortable to stay in. Centrally located in LA, close to almost everything.",
      stars: 5
    },
    {
      spotId: 1,
      userId: 7,
      review: "What an incredible home and view! The home is nestled up above Sunset Blvd and has spectacular views from every room and has an amazing pool + spa. My fiancé and I rented the home to celebrate our engagement and we couldn't have chosen a better location. She felt like a queen during our stay.",
      stars: 5
    },
    {
      spotId: 2,
      userId: 9,
      review: "The setting is absolutely magnificent, overlooking Newport Beaches, and Lagoon in the distance. We would definitely stay there again! The house is an architectural wonder, mid century modern style, with exquisite landscaping, and beautiful decor.",
      stars: 5
    },
    {
      spotId: 2,
      userId: 8,
      review: "This is such an amazing place to stay. I highly recommend. Great views. Great location. Very clean. The patio with the fire pit is amazing. 10/10",
      stars: 4
    },
    {
      spotId: 2,
      userId: 7,
      review: "Wonderful and quirky beach house with great location in bustling New Port Beach. Great patio and living space. For on the beach and pets ok, pretty hard to beat. Would stay again.",
      stars: 5
    },
    {
      spotId: 2,
      userId: 6,
      review: "This home positioned as a luxury beach house and one of the nicest rentals in Newport. I would say it's an average beach house at best.",
      stars: 3
    },
    {
      spotId: 3,
      userId: 8,
      review: "Luxury home on the beach!",
      stars: 5
    },
    {
      spotId: 3,
      userId: 10,
      review: "Amazing beach house in Malibu!",
      stars: 4
    },
    {
      spotId: 3,
      userId: 9,
      review: "Love that it was walking distance to Nobu restaurant!",
      stars: 5
    },
    {
      spotId: 3,
      userId: 6,
      review: "Love the direct access to the beach."
    },
    {
      spotId: 4,
      userId: 7,
      review: "Dream home. Dream pool!",
      stars: 5
    },
    {
      spotId: 4,
      userId: 2,
      review: "Nice cozy villa in LA.",
      stars: 4,
    },
    {
      spotId: 4,
      userId: 3,
      review: "Had a wonderful time staying in this Mc-Mansion in LA!",
      stars: 5
    },
    {
      spotId: 4,
      userId: 9,
      review: "My family and I had a great time. Amazing pool!",
      stars: 5
    },
    {
      spotId: 5,
      userId: 6,
      review: "Luxurious home with a pool!",
      stars: 5
    },
    {
      spotId: 5,
      userId: 2,
      review: "House was very neat and clean.",
      stars: 4
    },
    {
      spotId: 5,
      userId: 8,
      review: "Simple elegant home in LA.",
      stars: 4
    },
    {
      spotId: 5,
      userId: 10,
      review: "Clean home. Nice host.",
      stars: 4
    },
    {
      spotId: 6,
      userId: 5,
      review: "Stunning views",
      stars: 5
    },
    {
      spotId: 6,
      userId: 1,
      review: "Amazing house on the hill. Best views of LA!",
      stars: 5
    },
    {
      spotId: 6,
      userId: 9,
      review: "It's all about the view!",
      stars: 4
    },
    {
      spotId: 6,
      userId: 7,
      review: "Best views in LA",
      stars: 5
    },
    {
      spotId: 7,
      userId: 4,
      review: "Spectacular view of the ocean",
      stars: 5
    },
    {
      spotId: 7,
      userId: 3,
      review: "Amazing beach house in Malibu!",
      stars: 5
    },
    {
      spotId: 7,
      userId: 5,
      review: "Love that it had a hot tub!",
      stars: 3
    },
    {
      spotId: 7,
      userId: 8,
      review: "Love having direct access to the beach.",
      stars: 4
    },
    {
      spotId: 8,
      userId: 3,
      review: "This house was off the charts beautiful. The perfect location and setting for a family trip to rejuvenate. Time slowed down here, the view is absolutely spectacular!",
      stars: 5
    },
    {
      spotId: 8,
      userId: 1,
      review: "This was an amazing house. Very close to everything while also be perched on a hill with a lot of privacy. We'd love to stay there again.",
      stars: 5
    },
    {
      spotId: 8,
      userId: 2,
      review: "Beautiful view, architecture, and interior design. Lived up to the photos! This house is amazing! I could have stayed for weeks.",
      stars: 5
    },
    {
      spotId: 8,
      userId: 9,
      review: "This place is off the charts gorgeous. The view is amazing, the house is well-designed, modern, clean and comfortable. It has all the amenities you could want and more. Plenty of space, very quiet, beautiful views and sunsets. I would go back in a heartbeat.",
      stars: 5
    },
    {
      spotId: 8,
      userId: 10,
      review: "Loved the outdoor fire pit.",
      stars: 5
    },
    {
      spotId: 9,
      userId: 2,
      review: "Tastefully designed",
      stars: 5
    },
    {
      spotId: 9,
      userId: 10,
      review: "Nice modern home in Los Angeles",
      stars: 4
    },
    {
      spotId: 9,
      userId: 2,
      review: "The pool was shaded which was nice.",
      stars: 4
    },
    {
      spotId: 9,
      userId: 4,
      review: "Loved the outdoor entertainment area.",
      stars: 4
    },
    {
      spotId: 10,
      userId: 1,
      review: "Very clean and nice host",
      stars: 5
    },
    {
      spotId: 10,
      userId: 6,
      review: "Nice modern home in LA.",
      stars: 5
    },
    {
      spotId: 10,
      userId: 2,
      review: "Nice, modern, clean.",
      stars: 4
    },
    {
      spotId: 10,
      userId: 3,
      review: "Loved the saltwater pool.",
      stars: 4
    },
    {
      spotId: 11,
      userId: 10,
      review: "This spot has amazing views!",
      stars: 5
    },
    {
      spotId: 11,
      userId: 9,
      review: "Such a nice home with amazing pool",
      stars: 5
    },
    {
      spotId: 11,
      userId: 2,
      review: "My family and I had a wonderful time at this home",
      stars: 5
    },
    {
      spotId: 11,
      userId: 4,
      review: "My favorite part about the home was the firepit!",
      stars: 5
    },
    {
      spotId: 12,
      userId: 6,
      review: "The ultimate luxury home.",
      stars: 5,
    },
    {
      spotId: 12,
      userId: 8,
      review: "The most amazing home gym!",
      stars: 5
    },
    {
      spotId: 12,
      userId: 5,
      review: "Nice open floorplan. Good for entertaining.",
      stars: 4
    },
    {
      spotId: 12,
      userId: 7,
      review: "Loved everything about this home!",
      stars: 5
    },
    {
      spotId: 13,
      userId: 8,
      review: "Loved the minimalistic style.",
      stars: 4
    },
    {
      spotId: 13,
      userId: 9,
      review: "The views were spectacular. I could see from DTLA to the ocean!",
      stars: 5
    },
    {
      spotId: 13,
      userId: 10,
      review: "Modern home with amazing views!",
      stars: 5
    },
    {
      spotId: 13,
      userId: 4,
      review: "This house is exceptional and made for the perfect weekend getaway!",
      stars: 5
    },
    {
      spotId: 14,
      userId: 2,
      review: "The host was very helpful and great at communicating",
      stars: 5
    },
    {
      spotId: 14,
      userId: 1,
      review: "Great location in Hollywood",
      stars: 4
    },
    {
      spotId: 14,
      userId: 5,
      review: "The infinity pool is amazing!",
      stars: 5
    },
    {
      spotId: 14,
      userId: 3,
      review: "Amazing views!",
      stars: 5
    },
    {
      spotId: 15,
      userId: 6,
      review: "The finest home in all of Beverly Hills!",
      stars: 5
    },
    {
      spotId: 15,
      userId: 7,
      review: "This home is totally worth the price",
      stars: 5
    },
    {
      spotId: 15,
      userId: 8,
      review: "I rent this home for my birthday every year and it never gets old!",
      stars: 5
    },
    {
      spotId: 15,
      userId: 9,
      review: "The walk in closets were insane!",
      stars: 5
    },
    {
      spotId: 16,
      userId: 3,
      review: "Needs review",
      stars: 4
    },
    {
      spotId: 16,
      userId: 5,
      review: "Needs review",
      stars: 4
    },
    {
      spotId: 16,
      userId: 6,
      review: "Needs review",
      stars: 5
    },
    {
      spotId: 16,
      userId: 7,
      review: "Needs review",
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
