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
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46569587/original/d6a8b675-ecfb-4f4c-856b-eb3a5d4deda3.jpeg"
    },
    {
      reviewId: 5,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/92cd324f-eacd-48fd-8727-d3827457dc5f.jpeg"
    },
    {
      reviewId: 9,
      url: "https://a0.muscache.com/im/pictures/867f9c91-348f-4f49-a10a-e4709e8f4693.jpg"
    },
    {
      reviewId: 13,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/7d47a587-5877-45aa-8ec0-785117167896.jpeg"
    },
    {
      reviewId: 17,
      url: "https://a0.muscache.com/im/pictures/ccd4eea9-9a5c-448c-9064-16f8a32f517d.jpg"
    },
    {
      reviewId: 21,
      url: "https://a0.muscache.com/im/pictures/e42f1a33-ffa4-4517-bd06-a11edc7f42e9.jpg"
    },
    {
      reviewId: 25,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/587200b3-c94c-4526-8722-f7e8b7ebe79c.jpeg"
    },
    {
      reviewId: 29,
      url: "https://a0.muscache.com/im/pictures/9b65420b-d8c7-4508-b690-8eb2d0e22eeb.jpg"
    },
    {
      reviewId: 33,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/4d7bba41-ba56-4e30-b3d8-0f7e3f9ce1ef.jpeg"
    },
    {
      reviewId: 37,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/ad528b80-04c6-48f9-ada8-dda785c021a0.jpeg"
    },
    {
      reviewId: 41,
      url: "https://a0.muscache.com/im/pictures/be754d45-6e9e-4564-949e-9b7b563851c0.jpg"
    },
    {
      reviewId: 45,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46569587/original/d6a8b675-ecfb-4f4c-856b-eb3a5d4deda3.jpeg"
    },
    {
      reviewId: 49,
      url: "https://a0.muscache.com/im/pictures/9f1f623a-efd1-4789-9f6c-5eac93c546c6.jpg"
    },
    {
      reviewId: 53,
      url: "https://a0.muscache.com/im/pictures/f021b6f1-893a-459a-a950-a9693fbdfcce.jpg"
    },
    {
      reviewId: 57,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-706047820221786677/original/d3c94900-5e51-4279-8f2e-fefc4653f1e2.jpeg"
    },
    {
      reviewId: 61,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46569587/original/8db200cd-d5dd-4125-be2d-f7cce13ed416.jpeg"
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
