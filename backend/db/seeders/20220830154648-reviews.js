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
      review: "No other word than spectacular can describe this home. It's design, build and decor. The location and views are fantastic. The care and maintenance is impeccable. And turns out, the owner James is a highly skilled software developer!",
      stars: 4
    },
    {
      spotId: 1,
      userId: 9,
      review: "This house is amazing, exactly as described and there is even a view of the Hollywood sign. It's an incredibly spacious house and very comfortable to stay in. Centrally located in LA, close to almost everything.",
      stars: 5
    },
    {
      spotId: 1,
      userId: 8,
      review: "Amazing property with great views of the Hollywood sign. Great spacious bedrooms. The sauna in the master bathroom was just everything! This house is a chef's dream. There's literally every appliance you could possibly dream of. I will definitely be staying here again soon. Thank you for the gracious hospitality!",
      stars: 5
    },
    {
      spotId: 1,
      userId: 7,
      review: "What an incredible home and view! The home is nestled up above Sunset Blvd and has spectacular views from every room and has an amazing pool + spa. My fiancé and I rented the home to celebrate our engagement and we couldn't have chosen a better location. She felt like a queen during our stay. The staff were kind, attentive and readily available if we had any questions. I would highly recommend this home.",
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
      review: "Incredible property. Clean, private, attentive managment, perfect for older kids (9+ age), nice location w direct beach access - could not have booked a better home for the value. Cannot wait to book our next stay!",
      stars: 5
    },
    {
      spotId: 3,
      userId: 10,
      review: "Amazing house with stunning views. Deck was spectacular with ocean views. House looks as photographed with very nice decor and amenities. Close drive to great restaurants but also feels like a nice escape. Sound of ocean drowns out any PCH noise. Definitely would come back.",
      stars: 4
    },
    {
      spotId: 3,
      userId: 9,
      review: "This house was spectacular! The location was great and the views were unmatched. Close proximity to so many great restaurants, shops and beaches. The house was very clean and well maintained. You can tell a lot of thought was put into the design and decor. Simply beautiful.",
      stars: 5
    },
    {
      spotId: 3,
      userId: 6,
      review: "The house is luxurious and the location is great. Host is quick to respond to any inquiries and is very helpful. Nothing like hearing ocean waves all day long - would stay again and again.",
      stars: 4
    },
    {
      spotId: 4,
      userId: 7,
      review: "We absolutely loved this house! It's centrally located, modern, very clean and Sean was great at responding! If you're looking for a place in LA, this house is for you. My husband and I stayed here for the weekend and was very pleased. We were able to visit Universal Studios during the day and have dinner in Beverly Hills the same day!",
      stars: 5
    },
    {
      spotId: 4,
      userId: 2,
      review: "The house is beautiful, very modern design. Very private. Great neighborhood. Walk to everything. Quiet. The AC system wasn't working well, but the manager said they will fix it. The weather during our stay was mild so it didn't matter that much. I would definitely stay there again.",
      stars: 4,
    },
    {
      spotId: 4,
      userId: 3,
      review: "Had a great time here with family. The space and roof are ideal and the location couldn't be more convenient to Melrose and the shops and restaurants. Very easy to contact someone if you need anything and they always followed up with us in regards to our stay to make sure it was great.",
      stars: 5
    },
    {
      spotId: 4,
      userId: 9,
      review: "Beautiful place. Kind host. Took my executive team for a business trip to LA and this place didn't disappoint! Will definitely be back!",
      stars: 5
    },
    {
      spotId: 5,
      userId: 6,
      review: "This home is breathtaking gorgeous but we did have a few issues. In all fairness, the host was responsive when contacted but it was having to reach out daily that took away from the full vacation enjoyment. There are some things that are broken in the home. Be sure to do a full inspection prior to booking.",
      stars: 3
    },
    {
      spotId: 5,
      userId: 2,
      review: "This house is absolutely stunning! The view is even more incredible than it looks in pictures - especially when the sun sets in the evening. The neighborhood is very quiet and we all slept like babies. Everyone's jaws nearly hit the floor when we first walked in. Thank you, Jane, for a great stay!",
      stars: 4
    },
    {
      spotId: 5,
      userId: 8,
      review: "This house is beautiful, far exceeds pictures.. sweeping panoramic views of LA that peaks at sunset. Modern finishes throughout the house, and host was more than helpful and communicative. Highly recommend!",
      stars: 4
    },
    {
      spotId: 5,
      userId: 10,
      review: "This place tops it. Big spacious house great pool and hot tub it has an amazing view of downtown. Amazing theater room it was overall amazing. The host was great she walked us through all the functions of the home. We most definitely recommend and would absolutely love to stay again. Thank you for your hospitality.",
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
      userId: 2,
      review: "James gave me the opportunity to use his place to propose to my gf. The place looks even better in person! James was very responsive. Overall place was great, location great and I would definitely stay again.",
      stars: 5
    },
    {
      spotId: 7,
      userId: 7,
      review: "Our family stayed at James' house for 10 days while on a vacation to LA. The house is absolutely perfect. You feel like a celebrity in it! It is in a really good neighbourhood, very safe, within walking distance of so much (the famous Grove, Farmers Market, Beverly Center and to a ton of really great restaurants).",
      stars: 5
    },
    {
      spotId: 7,
      userId: 8,
      review: "Beautiful house, but wasn't a huge fan of my stay. Owner kept rushing us to checkout for their next guest that was checking in. The cleaning crew walked into the house before checkout when I specifically told the owner we didn't want the cleaning crew cleaning while we were there before checkout. When we told them if they could wait until 11am they got mad.",
      stars: 3
    },
    {
      spotId: 7,
      userId: 9,
      review: "The place was amazing! Property was huge with high tech, pool was big and can be heated, everything was clean upon check-in and James was quick at responding. Place is much nicer than the pics. We had a blast!",
      stars: 5
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
      review: "One of the best villas in LA, magnificent views especially at night. Lovely swimming pool and jacuzzi. Urban design, great taste of decoration and interior design, extremely cozy bed. Would recommend to friends and family.",
      stars: 5,
    },
    {
      spotId: 12,
      userId: 8,
      review: "Not only is this an awesome unit it's exactly the way it looks in the pictures. The owner went out of his way to take care of us and I would suggest this home to anybody looking for a great place to stay.",
      stars: 5
    },
    {
      spotId: 12,
      userId: 5,
      review: "Very responsive hosts, clean and beautiful home! The check in /out process was easy and seamless. Definitely going to come back!",
      stars: 4
    },
    {
      spotId: 12,
      userId: 7,
      review: "Highly recommend, amazing home, the owner was really great and treats you like family so you enjoy your stay. The home was in perfect condition and you won't be disappointed.",
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
      userId: 4,
      review: "This house is even better than the photos! Celebrated my 30th birthday here with friends and we were all blown away by the location - right on the water, with enough room for everyone. Can't wait to book this place again.",
      stars: 5
    },
    {
      spotId: 15,
      userId: 3,
      review: "Beautiful house in an amazing location. We enjoyed the views- we would see dolphins swimming multiple times a day, daily. It was just beautiful to be on the balcony and really enjoyed all the amenities.",
      stars: 5
    },
    {
      spotId: 15,
      userId: 5,
      review: "We had a great stay at Mike's home. Centrally located, we were able to get to Malibu Pier and Santa Monica super quick! It was so nice having 2 parking spots. The house was fabulous and Mike was attentive to any questions and needs that came up during our stay.",
      stars: 3
    },
    {
      spotId: 15,
      userId: 8,
      review: "Wow wow! The location doesn't get better than this if you are looking for a house on the ocean. It's about as close to the ocean as it gets. We got lucky with having low tide and were able to walk almost 2 miles on the beach in the morning.",
      stars: 4
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
