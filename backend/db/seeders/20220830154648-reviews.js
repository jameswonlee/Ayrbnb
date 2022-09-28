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
      stars: 4
    },
    {
      spotId: 1,
      userId: 9,
      review: "This place was awesome!",
      stars: 5
    },
    {
      spotId: 1,
      userId: 8,
      review: "Amazing!",
      stars: 5
    },
    {
      spotId: 1,
      userId: 7,
      review: "Excellent location and amazing views!",
      stars: 5
    },
    {
      spotId: 2,
      userId: 9,
      review: "Nice spacious home on the beach",
      stars: 5
    },
    {
      spotId: 2,
      userId: 8,
      review: "Loved the outdoor entertainment area with direct access to the beach",
      stars: 4
    },
    {
      spotId: 2,
      userId: 7,
      review: "Newport Beach's finest beach home!",
      stars: 5
    },
    {
      spotId: 2,
      userId: 6,
      review: "Home was great. Host was not.",
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
      review: "Gorgeous views",
      stars: 5
    },
    {
      spotId: 8,
      userId: 1,
      review: "The view was just breathtaking!",
      stars: 5
    },
    {
      spotId: 8,
      userId: 2,
      review: "This house is amazing! I could have stayed for weeks.",
      stars: 5
    },
    {
      spotId: 8,
      userId: 9,
      review: "It's all about the view!",
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
