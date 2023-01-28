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
      userId: 11,
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
      review: "This house is AMAZING! The views are breathtaking. It was super clean and has all the bells and whistles. I couldn't have had a better stay and look forward to staying again soon.",
      stars: 5
    },
    {
      spotId: 6,
      userId: 1,
      review: "The location was incredible, with views of all of LA and the surrounding hills and neighborhoods. The house itself was very comfortable, with plenty of space for parking and room for guests. Sunrises and sunsets were incredible, and night views of the city provided the perfect backdrop for evening entertaining. Can't say enough how fun it was staying at this spot!",
      stars: 5
    },
    {
      spotId: 6,
      userId: 9,
      review: "Wow, this was the best experience that I have ever had with an Airbnb. Susan was such a gracious host and attended to our every need. The views of this place was none that I could imagine nor explain. 10 Stars if it was possible.",
      stars: 4
    },
    {
      spotId: 6,
      userId: 7,
      review: "Absolutely amazing house with amazing views!!! Susan was very attentive to our needs and accommodations and the house provided everything a guest would ever need. Definitely hope to stay here again soon!!",
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
      review: "Communication with the host was smooth and they were very accommodating. I would definitely recommend this place for people who are looking for a relaxing time away from home.",
      stars: 5
    },
    {
      spotId: 9,
      userId: 10,
      review: "We absolutely loveeeeeee this home !!! It was in the perfect location and easy to get to all our favorite spots! The house was impeccable!!!! Super duper clean, the layout is incredibly beautiful and spacious! The staff are also extremely helpful and very responsive. I highly recommend this home away from home to truly enjoy and love your stay in one of my favorite domestic cities!!!!!! You'll love and adore it totally! Thank you all tremendously!",
      stars: 4
    },
    {
      spotId: 9,
      userId: 2,
      review: "My friends and I booked this amazing home at the very last minute after a tiring weekend of camping at EDC Vegas. The host was not only very responsive but also super understanding and accomodating to some of our needs that day.",
      stars: 4
    },
    {
      spotId: 9,
      userId: 4,
      review: "Absolutely loved everything about this property! So modern and stylist. We loved the kitchen, it had just about every pot, pan and utensil we needed. The pool was so relaxing and we loved the outdoor dining area. The master bedroom and bathroom was everything!!",
      stars: 4
    },
    {
      spotId: 10,
      userId: 1,
      review: "Beautiful, clean, and spacious home in a great location. There were many little details that really made the place special, from a sonos system throughout the entire house, to snacks and drinks being left by the previous guests for us the enjoy. We thoroughly enjoyed our stay.",
      stars: 5
    },
    {
      spotId: 10,
      userId: 6,
      review: "We really enjoyed our stay. The house is modern, clean, comfortable, and incredibly spacious. It's very centrally located yet feels private and secluded. We would definitely return!",
      stars: 5
    },
    {
      spotId: 10,
      userId: 2,
      review: "I have nothing but wonderful things to say about this home. As soon as you step in, all you would say is WOW!!! Very well appointed, and very clean! Mark is a gracious host who is always quick to answer questions and make sure you have everything you need. By far, this is the best AirBnB experience we have had.",
      stars: 4
    },
    {
      spotId: 10,
      userId: 3,
      review: "Great, tasteful modern house in a convenient location and neighborhood. Easy access to most of LA spots, from Westside to Downtown. Proximal to great restaurants and shopping in Culver City, Century City and Beverly Hills. Was great to be able to accommodate our large family of 6 plus our dog with privacy we wouldn't have been able to get from a hotel. Nicely finished bathrooms, kitchen, and interior. Beautiful backyard with a deck was great for a taste of indoor-outdoor living.",
      stars: 4
    },
    {
      spotId: 11,
      userId: 10,
      review: "Great check in, we paid extra for the pool and hot tub to be heated. When we got there it wasn't turned on and the hot tub had half the water level missing. We texted one of the hosts and he came and filled it up. We had to refill it the next day as well but then it seemed to maintain its water level. That was the only minor issue we had. Otherwise what a wonderful house. The views are amazing. Location is great! Definitely worth it.",
      stars: 3
    },
    {
      spotId: 11,
      userId: 9,
      review: "This is an amazing property in a great location. The host responded quickly and assisted us when needed. We had no need to leave the home.",
      stars: 5
    },
    {
      spotId: 11,
      userId: 2,
      review: "Incredibly pleased and impressed by the home and exceptional service. The view is breathtaking and the home is peaceful and quiet. From booking to check in to check out communication was seamless and the hosts were wonderful. I would definitely stay there or at another of their homes again.",
      stars: 5
    },
    {
      spotId: 11,
      userId: 4,
      review: "The check in was easy. And the house is gorgeous. You can't beat the views and for all you hikers, it's one block away from the back side of Runyon Canyon. It's worth it to heat the pool.",
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
      review: "The house was beautiful and great price for all that you get!!! The location is a bit sketchy. We did not feel safe, we always had people looking in the windows and waving while we did office work. But, maybe, what can do you when you stay next to Fairfax & Melrose. Had a hard time with all of the iPads and, connecting music to the tv took a while every single day we were there. The lady barged in right at 11:59am, while our check out was 12pm. So….. Very on time, I guess. They also charged $40 for table scratches which just seemed like a way to get money.",
      stars: 4
    },
    {
      spotId: 13,
      userId: 9,
      review: "Their places are just the most amazing, nothing is missing, everything you need is available and when ever you need something, they are right away available. Definitely not the last time I stay here!",
      stars: 5
    },
    {
      spotId: 13,
      userId: 10,
      review: "This is the second home we rented from Jessica in the Hollywood Hills and both times they were great. She is highly communicative, responsive and professional. We had a small issue and they sent someone to the house to rectify it in an hour. I would and will rent from them again for sure",
      stars: 5
    },
    {
      spotId: 13,
      userId: 4,
      review: "This place is just the most amazing, nothing is missing, everything you need is available and when ever you need something, they are right away available. Definitely not the last time I stay here! This house is exceptional and made for the perfect weekend getaway!",
      stars: 5
    },
    {
      spotId: 14,
      userId: 2,
      review: "I am in love with this Airbnb. It is located close to everything. John was extremely accommodating, he allowed me to have my personal chef and the backyard was perfect for relaxing. The pool and spa heat up very fast. The home is modern and beautiful. I will book every time I'm in LA. Also kid friendly. My 3 years son had a blast.",
      stars: 5
    },
    {
      spotId: 14,
      userId: 1,
      review: "John's place was as advertised and absolutely fabulous! The location, luxury finishes, backyard oasis, rooftop, chef's kitchen were all on-point! He was also very attentive and quick to respond to the few questions we had. We had 7 family members stay there - all were wowed and would stay there again!",
      stars: 4
    },
    {
      spotId: 14,
      userId: 6,
      review: "The communication with the host is unmatched! John went above and beyond for my family and I and we were highly satisfied and happy! Would absolutely rent from him again!",
      stars: 5
    },
    {
      spotId: 14,
      userId: 3,
      review: "This is a beautiful home in such a great location!! The view from the roof is amazing & truly breath taking! It's a very clean home with comfortable pillows that actually makes you feel well rested. The location is great & perfect short walk to many shops and restaurants! I would 100% stay here again and recommend this home to anyone who wants a location closer to the Hollywood sign that is still near the shops on Fairfax & Rodeo dr. (less than 5mins)",
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
      review: "Quick and easy check-in and the management team were accommodating on requests and responded quickly. Space was freshly cleaned and as described in the listing. Would definitely stay again!",
      stars: 4
    },
    {
      spotId: 16,
      userId: 5,
      review: "Amazing house. Very clean and the backyard is an Oasis. Perfect location. James and his team were available at all times and responsive. Overall amazing experience.",
      stars: 4
    },
    {
      spotId: 16,
      userId: 6,
      review: "This was a great stay overall! The home was beautiful, neighborhood was mostly quiet despite some construction next door, outdoor space was great as well. Only complaint being that we weren't able to figure out how to use the hot tub and one of the fireplaces during our stay. Would still recommend and would stay here again.",
      stars: 5
    },
    {
      spotId: 16,
      userId: 7,
      review: "The house is very spacious, well equipped and clean indoors. The host is very communicative and prompt in responding to questions. The location is great as it is close to several amenities (bakery, Target, groceries, LACMA museum etc.). The swimming pool is a very pleasant feature and made our stay enjoyable.",
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
