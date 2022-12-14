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
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46569587/original/f5f2343c-4eb8-4fef-a49f-348141a54558.jpeg",
      preview: true
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46569587/original/f8cbd861-8b6f-4949-a2d5-a3fb8b7bed97.jpeg",
      preview: false
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46569587/original/ba49125d-8b8a-4799-87e5-146f12fee19d.jpeg",
      preview: false
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46569587/original/f7b53e86-e2f8-433c-b4e6-07b5240c040b.jpeg",
      preview: false
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46569587/original/5ac9dc0a-6a14-44a7-9b90-91640c653b9d.jpeg",
      preview: false
    },
    {
      spotId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/9a803ca2-e53b-464d-b7a6-9d41986e86d9.jpeg",
      preview: true
    },
    {
      spotId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/74893a45-627f-4382-9c61-cd2fb56d2a52.jpeg",
      preview: false
    },
    {
      spotId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/ff9af906-e211-481e-a572-b5f51dfe693d.jpeg",
      preview: false
    },
    {
      spotId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/6378cdd2-257f-456c-80cf-7760303683ce.jpeg",
      preview: false
    },
    {
      spotId: 2,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/f468ffb2-d67d-48fe-9b17-ee7342b40a0b.jpeg",
      preview: false
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/159acce3-50e1-4a2b-9682-6c3384762691.jpg",
      preview: true
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/3b0b2eda-3aac-4d31-98ab-0380884b7678.jpg",
      preview: false
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/a9332cac-0dd5-419e-b171-bdf1846ec0e0.jpg",
      preview: false
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/a1a439ea-ca05-49d4-bb64-b57b6f44f9d7.jpg",
      preview: false
    },
    {
      spotId: 3,
      url: "https://a0.muscache.com/im/pictures/1bcb9e68-6966-4bcd-8c64-41ecef24acf1.jpg",
      preview: false
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/e6135e23-4ec6-4b1f-8e97-62ee69725512.jpeg",
      preview: true
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/f0aa49fa-1f9e-4e4d-8d08-2979f6100ca6.jpeg",
      preview: false
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/7cbb5c7b-9efe-43b3-a64e-b6b8c90d3daa.jpeg",
      preview: false
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/a32dcb48-1461-4128-9984-3526e8fcce0c.jpeg",
      preview: false
    },
    {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-615424299798225044/original/da69138e-8e75-41a6-8213-0ba3605acf50.jpeg",
      preview: false
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/f6b6badb-26a7-4603-8dab-47e76abdf234.jpg",
      preview: true
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/e60b7c59-af92-4db9-8a17-b86bc1f78c0d.jpg",
      preview: false
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/e4660f6d-fd7b-43b5-af51-0df37c191b79.jpg",
      preview: false
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/20369703-9305-414a-b27d-2ed4d1402cf1.jpg",
      preview: false
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/29d95fb6-e506-4a64-b4db-64131f22ab00.jpg",
      preview: false
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-35835653/original/f6c324b3-18c6-449a-84ff-353d613a8349.jpeg",
      preview: true
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/fa66c733-f094-489e-9c5b-9994e8a61e2f.jpg",
      preview: false
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/922f1d1d-a519-4fe6-88d1-c3ebe646a185.jpg",
      preview: false
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/2f31a26a-61c7-4772-ad2b-571b46ddc271.jpg",
      preview: false
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/c85f6f46-618e-4eba-ae6d-1eb5488dca90.jpg",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-706047820221786677/original/d27be508-308f-4e06-94f5-58b9e15f80f0.jpeg",
      preview: true
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-706047820221786677/original/dbd37b95-aafb-4c8d-b2d9-8ffb5565a092.jpeg",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-706047820221786677/original/a1de9874-faa7-4e75-9c18-40d9be63a937.jpeg",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-706047820221786677/original/b1ec3a31-04ba-46b8-81dc-7a2b8c0995b4.jpeg",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-706047820221786677/original/69064e1a-e5ee-4830-9794-3d908086e022.jpeg",
      preview: false
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/029dfb9a-1a38-4db5-8118-480f660d8362.jpg",
      preview: true
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/77b8df27-0174-4998-bc79-ea888cb92bf1.jpg",
      preview: false
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/e3aba5f7-f7f3-44c0-b389-cc46530f8862.jpg",
      preview: false
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/554cf718-cca6-4519-bbf8-9aadaa17a26b.jpg",
      preview: false
    },
    {
      spotId: 8,
      url: "https://a0.muscache.com/im/pictures/139aa1e1-9c6a-45ce-845a-d65da1e61625.jpg",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/4b864149-a361-44c5-b436-e59357af709e.jpeg",
      preview: true
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/cd789e42-f0b4-41a4-ab23-f1eebf7253f8.jpeg",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/1064247e-6692-4014-b4c4-c1727625d19f.jpeg",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/6245389b-6b64-4e94-8630-cb36444490e1.jpeg",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-642405374944240165/original/356be85e-4700-4923-a755-b40d012d2871.jpeg",
      preview: false
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/2a1bdc52-fe59-4f00-b3ec-45acd8f8ef75.jpeg",
      preview: true
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/c2ae8995-e5f7-4d7a-832b-36de5e11ba5c.jpeg",
      preview: false
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/c816ba8c-dfbf-413f-ba6d-8a316a240577.jpeg",
      preview: false
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/c7da9437-7b8a-46c7-bdaa-6d133050a06c.jpeg",
      preview: false
    },
    {
      spotId: 10,
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48122828/original/1b40c70f-4522-4d7f-b0c8-f0020fe6ce1b.jpeg",
      preview: false
    },
    {
      spotId: 11,
      url: "https://a0.muscache.com/im/pictures/c2fb7e1d-62be-464a-a528-5585f2180432.jpg",
      preview: true
    },
    {
      spotId: 11,
      url: "https://a0.muscache.com/im/pictures/94c4561c-210b-44a3-932d-ad191155f821.jpg",
      preview: false
    },
    {
      spotId: 11,
      url: "https://a0.muscache.com/im/pictures/8749eece-71a0-4458-9d10-908e97f1938b.jpg",
      preview: false
    },
    {
      spotId: 11,
      url: "https://a0.muscache.com/im/pictures/abb5bd7e-84a9-461a-ac8c-eedfe4b38158.jpg",
      preview: false
    },
    {
      spotId: 11,
      url: "https://a0.muscache.com/im/pictures/fd00f718-4865-4ad7-a5ae-7c6a1d04b2ae.jpg",
      preview: false
    },
    {
      spotId: 12,
      url: "https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg",
      preview: true
    },
    {
      spotId: 12,
      url: "https://a0.muscache.com/im/pictures/d63e4a91-4cd1-468f-9811-8a8c57467bbd.jpg",
      preview: false
    },
    {
      spotId: 12,
      url: "https://a0.muscache.com/im/pictures/ea8e0c20-8987-4c82-a77f-695f57730ac9.jpg",
      preview: false
    },
    {
      spotId: 12,
      url: "https://a0.muscache.com/im/pictures/47a31963-2569-49f6-ad2c-376a0de19119.jpg",
      preview: false
    },
    {
      spotId: 12,
      url: "https://a0.muscache.com/im/pictures/ab286454-1ce5-4d8b-bbab-913f40e6336e.jpg",
      preview: false
    },
    {
      spotId: 13,
      url: "https://a0.muscache.com/im/pictures/91c9aa61-2383-4537-80d2-8b450588ebd3.jpg",
      preview: true
    },
    {
      spotId: 13,
      url: "https://a0.muscache.com/im/pictures/e2be2c10-0509-4592-9362-9890805fae3e.jpg",
      preview: false
    },
    {
      spotId: 13,
      url: "https://a0.muscache.com/im/pictures/4e2a12ff-6fca-46fd-811e-ca269367cdff.jpg",
      preview: false
    },
    {
      spotId: 13,
      url: "https://a0.muscache.com/im/pictures/6346b12c-59bc-4cff-b021-7c848545e303.jpg",
      preview: false
    },
    {
      spotId: 13,
      url: "https://a0.muscache.com/im/pictures/3be45f5a-0f9a-4664-a12e-5d8d8ab5122e.jpg",
      preview: false
    },
    {
      spotId: 14,
      url: "https://a0.muscache.com/im/pictures/37d157cd-b214-4179-9a6c-0c6bf397991c.jpg",
      preview: true
    },
    {
      spotId: 14,
      url: "https://a0.muscache.com/im/pictures/f944054f-4d08-4b4b-bf0a-0b1c5d600094.jpg",
      preview: false
    },
    {
      spotId: 14,
      url: "https://a0.muscache.com/im/pictures/44f4e5e8-4d77-44a4-bec9-2a06b341f24e.jpg",
      preview: false
    },
    {
      spotId: 14,
      url: "https://a0.muscache.com/im/pictures/b12c5821-92ed-4ba4-ad53-b8b4f72ecfb2.jpg",
      preview: false
    },
    {
      spotId: 14,
      url: "https://a0.muscache.com/im/pictures/5b9ed608-6e06-41e7-bc2d-99c70d366b27.jpg",
      preview: false
    },
    {
      spotId: 15,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/8c8dda04-a68f-4448-8b55-88e5da49875e.jpeg",
      preview: true
    },
    {
      spotId: 15,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/55157994-d4b7-4c0d-bfdb-0b50712a23bd.jpeg",
      preview: false
    },
    {
      spotId: 15,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/44ab240f-0025-46a9-a494-e2911388c180.jpeg",
      preview: false
    },
    {
      spotId: 15,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/0dd1594b-ecdd-488f-b8b3-2c8ebea348c0.jpeg",
      preview: false
    },
    {
      spotId: 15,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-716094518642442603/original/0c6cf8ec-29b6-4c45-acef-5dcf9e3fe805.jpeg",
      preview: false
    },
    
    {
      spotId: 16,
      url: "https://a0.muscache.com/im/pictures/73b97ef8-f872-4d62-bb38-122e63cc6a4d.jpg",
      preview: true,
    },
    {
      spotId: 16,
      url: "https://a0.muscache.com/im/pictures/4ec1a3b9-ff41-40e0-a2f9-7ea4a0333022.jpg",
      preview: false
    },
    {
      spotId: 16,
      url: "https://a0.muscache.com/im/pictures/fba87954-6480-454c-a664-b1523af6411c.jpg",
      preview: false
    },
    {
      spotId: 16,
      url: "https://a0.muscache.com/im/pictures/70c7bf9b-479e-4d45-9eea-8e5eebde1679.jpg",
      preview: false
    },
    {
      spotId: 16,
      url: "https://a0.muscache.com/im/pictures/8cd06c69-da22-4e73-9bcb-022a15dadd00.jpg",
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
