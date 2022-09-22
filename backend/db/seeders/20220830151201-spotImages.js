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
   await queryInterface.bulkInsert('SpotImages', [
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/73b97ef8-f872-4d62-bb38-122e63cc6a4d.jpg?",
      preview: true
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/4ec1a3b9-ff41-40e0-a2f9-7ea4a0333022.jpg?",
      preview: false
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/fba87954-6480-454c-a664-b1523af6411c.jpg?",
      preview: false
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/70c7bf9b-479e-4d45-9eea-8e5eebde1679.jpg?",
      preview: false
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/8cd06c69-da22-4e73-9bcb-022a15dadd00.jpg?",
      preview: false
    },
    {
      spotId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/9a803ca2-e53b-464d-b7a6-9d41986e86d9.jpeg?",
      preview: true
    },
    {
      spotId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/74893a45-627f-4382-9c61-cd2fb56d2a52.jpeg?",
      preview: false
    },
    {
      spotId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/ff9af906-e211-481e-a572-b5f51dfe693d.jpeg?",
      preview: false
    },
    {
      spotId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/6378cdd2-257f-456c-80cf-7760303683ce.jpeg?",
      preview: false
    },
    {
      spotId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/f468ffb2-d67d-48fe-9b17-ee7342b40a0b.jpeg?",
      preview: false
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/e99f4706-2c4e-4690-a7da-d6ad5184c50f.jpg?",
      preview: true
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/52d2235d-031d-4f73-b1cd-18e8d05a0265.jpg?",
      preview: false
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/c8681c40-2c76-4539-8474-9f2496566b92.jpg?",
      preview: false
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/b9efc1d6-8ae4-4f30-a73a-81126f212311.jpg?",
      preview: false
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/ccbf7333-166c-4069-b02c-97895cd2a2ed.jpg?",
      preview: false
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/e6135e23-4ec6-4b1f-8e97-62ee69725512.jpeg?",
      preview: true
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/f0aa49fa-1f9e-4e4d-8d08-2979f6100ca6.jpeg?",
      preview: false
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/7cbb5c7b-9efe-43b3-a64e-b6b8c90d3daa.jpeg?",
      preview: false
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/a32dcb48-1461-4128-9984-3526e8fcce0c.jpeg?",
      preview: false
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/da69138e-8e75-41a6-8213-0ba3605acf50.jpeg?",
      preview: false
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-49859984/original/84f6fee3-103e-4d2d-bcc0-5718150f4aa8.jpeg?",
      preview: true
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-49859984/original/05348d30-2525-4d1c-9510-d40fdc5802e5.jpeg?",
      preview: false
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-49859984/original/a30df8c0-a0fe-4501-aa6a-045fa226dde0.jpeg?",
      preview: false
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/f69187b6-6565-4636-ac2a-bf3492f045e1.jpg?",
      preview: false
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-49859984/original/0c18bfe8-dfc7-4496-835d-4b512a2791de.jpeg?",
      preview: false
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-35835653/original/f6c324b3-18c6-449a-84ff-353d613a8349.jpeg?",
      preview: true
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/fa66c733-f094-489e-9c5b-9994e8a61e2f.jpg?",
      preview: false
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/fa66c733-f094-489e-9c5b-9994e8a61e2f.jpg?",
      preview: false
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/2f31a26a-61c7-4772-ad2b-571b46ddc271.jpg?",
      preview: false
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/c85f6f46-618e-4eba-ae6d-1eb5488dca90.jpg?",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/8c8dda04-a68f-4448-8b55-88e5da49875e.jpeg?",
      preview: true
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/55157994-d4b7-4c0d-bfdb-0b50712a23bd.jpeg?",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/44ab240f-0025-46a9-a494-e2911388c180.jpeg?",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/0dd1594b-ecdd-488f-b8b3-2c8ebea348c0.jpeg?",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/0c6cf8ec-29b6-4c45-acef-5dcf9e3fe805.jpeg?",
      preview: false
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/029dfb9a-1a38-4db5-8118-480f660d8362.jpg?",
      preview: true
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/77b8df27-0174-4998-bc79-ea888cb92bf1.jpg?",
      preview: false
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/e3aba5f7-f7f3-44c0-b389-cc46530f8862.jpg?im_w=1440",
      preview: false
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/554cf718-cca6-4519-bbf8-9aadaa17a26b.jpg?",
      preview: false
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/139aa1e1-9c6a-45ce-845a-d65da1e61625.jpg?",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/4b864149-a361-44c5-b436-e59357af709e.jpeg?",
      preview: true
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/cd789e42-f0b4-41a4-ab23-f1eebf7253f8.jpeg?",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/1064247e-6692-4014-b4c4-c1727625d19f.jpeg?",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/6245389b-6b64-4e94-8630-cb36444490e1.jpeg?",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/356be85e-4700-4923-a755-b40d012d2871.jpeg?",
      preview: false
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/2a1bdc52-fe59-4f00-b3ec-45acd8f8ef75.jpeg?",
      preview: true
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/c2ae8995-e5f7-4d7a-832b-36de5e11ba5c.jpeg?",
      preview: false
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/c816ba8c-dfbf-413f-ba6d-8a316a240577.jpeg?",
      preview: false
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/c7da9437-7b8a-46c7-bdaa-6d133050a06c.jpeg?",
      preview: false
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/1b40c70f-4522-4d7f-b0c8-f0020fe6ce1b.jpeg?",
      preview: false
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
    await queryInterface.bulkDelete('SpotImages')
  }
};
