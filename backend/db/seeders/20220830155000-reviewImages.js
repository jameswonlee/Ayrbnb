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
   await queryInterface.bulkInsert('ReviewImages', [
    {
      reviewId: 1,
      url: "https://www.airbnb.com/rooms/575646144429203898?location=West%20Hollywood%2C%20California%2C%20United%20States&check_in=2022-09-24&check_out=2022-09-25&federated_search_id=6f3a52fa-49f5-4d5c-b13a-961d58c69740&source_impression_id=p3_1661872643_zPXIgnSzUSYlT4Vq&modal=PHOTO_TOUR_SCROLLABLE&modalItem=1438733105"
    },
    {
      reviewId: 2,
      url: "https://www.airbnb.com/rooms/53753433?check_in=2022-10-01&check_out=2022-10-02&federated_search_id=2b58f6fd-df97-4ef7-b5d0-67ebec517e1b&source_impression_id=p3_1661873031_NfuBMWeMzuybcCY3&modal=PHOTO_TOUR_SCROLLABLE&modalItem=1303121438"
    },
    {
      reviewId: 3,
      url: "https://www.airbnb.com/rooms/35835653?location=Hollywood%20Hills%20West%2C%20Los%20Angeles%2C%20California%2C%20United%20States&check_in=2022-11-05&check_out=2022-11-06&federated_search_id=c8828646-a19f-4971-897a-0d8aaa1284cf&source_impression_id=p3_1661872439_bwpyG3L6FgGwuNou&modal=PHOTO_TOUR_SCROLLABLE&modalItem=833113639"
    },
    {
      reviewId: 4,
      url: "https://www.airbnb.com/rooms/41356396?check_in=2023-01-07&check_out=2023-01-08&federated_search_id=9d654bd3-1178-4f57-ab4b-4daec46675fc&source_impression_id=p3_1661877570_agx9YOaTY1u4P%2FJV&modal=PHOTO_TOUR_SCROLLABLE&modalItem=944259567",
    },
    {
      reviewId: 5,
      url: "https://www.airbnb.com/rooms/624797674150739145?check_in=2022-12-03&check_out=2022-12-04&federated_search_id=38a35232-b857-4e20-8c87-2b7e13644887&source_impression_id=p3_1661877664_i8QUUD1fKj4MPni0&modal=PHOTO_TOUR_SCROLLABLE&modalItem=1431225309"
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
    await queryInterface.bulkDelete('ReviewImages')
  }
};
