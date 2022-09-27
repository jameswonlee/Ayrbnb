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
      url: "https://a0.muscache.com/im/pictures/33b3d2ad-52a9-4799-9c26-943a15099202.jpg?"
    },
    {
      reviewId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/92cd324f-eacd-48fd-8727-d3827457dc5f.jpeg?"
    },
    {
      reviewId: 3,
      url: "https://a0.muscache.com/im/pictures/867f9c91-348f-4f49-a10a-e4709e8f4693.jpg?"
    },
    {
      reviewId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/7d47a587-5877-45aa-8ec0-785117167896.jpeg?"
    },
    {
      reviewId: 5,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-49859984/original/cf0b6e5d-b928-4702-801e-9f0a96fd80cb.jpeg?"
    },
    {
      reviewId: 6,
      url: "https://a0.muscache.com/im/pictures/e42f1a33-ffa4-4517-bd06-a11edc7f42e9.jpg?"
    },
    {
      reviewId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/587200b3-c94c-4526-8722-f7e8b7ebe79c.jpeg?"
    },
    {
      reviewId: 8,
      url: "https://a0.muscache.com/im/pictures/9b65420b-d8c7-4508-b690-8eb2d0e22eeb.jpg?"
    },
    {
      reviewId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/4d7bba41-ba56-4e30-b3d8-0f7e3f9ce1ef.jpeg?"
    },
    {
      reviewId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/ad528b80-04c6-48f9-ada8-dda785c021a0.jpeg?"
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
