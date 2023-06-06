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
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-849817184832495112/original/feba595b-3e08-4be7-9d9b-a4c081c10ceb.jpeg",
      preview: true
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-849817184832495112/original/6f68851d-71af-4671-b39f-9da193264974.jpeg",
      preview: false
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-849817184832495112/original/a6275020-e96c-4391-9ab9-1020b3d92e13.jpeg",
      preview: false
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-849817184832495112/original/69f5212c-766e-42b8-b677-9108a8d30474.jpeg",
      preview: false
    },
    {
      spotId: 1,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-849817184832495112/original/cddd0cb6-52ec-44a0-b177-26d6849f9da2.jpeg",
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
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-750036080448718716/original/729c32dc-0a15-4f8b-befe-e9e7c1488bb4.jpeg",
      preview: true
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-750036080448718716/original/0a9798cc-551c-4474-a61b-544ca86060f0.jpeg",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-750036080448718716/original/419f78ff-1b8c-4e52-a19e-415823f905a0.jpeg",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-750036080448718716/original/5730f421-9240-4e82-9854-239067dbc3bb.jpeg",
      preview: false
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-750036080448718716/original/fe877e3e-68a9-499b-8705-c041602bfbe3.jpeg",
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
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-775377658154490749/original/f19deed1-6006-44ba-99b6-174734904917.jpeg",
      preview: true
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-775377658154490749/original/da557e4b-1e1b-4a7e-b6eb-fa3a3e484399.jpeg",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-775377658154490749/original/574aea17-7458-45a7-87a6-bf8299501187.jpeg",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-775377658154490749/original/1bb5c3d2-d9bf-408e-bc52-ae62443b158e.jpeg",
      preview: false
    },
    {
      spotId: 9,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-775377658154490749/original/50180e6b-42f4-49f1-8c92-4b65553afc70.jpeg",
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
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-772165025645316142/original/b2ea5e7b-c665-467d-80e1-ce23e36fd33a.jpeg",
      preview: true
    },
    {
      spotId: 14,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-772165025645316142/original/c0ac9f5a-acdb-4e2a-a265-741d605daba9.jpeg",
      preview: false
    },
    {
      spotId: 14,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-772165025645316142/original/b3665d73-a193-4f1a-9c5d-2787a789237d.jpeg",
      preview: false
    },
    {
      spotId: 14,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-772165025645316142/original/40b3f0d1-7907-4697-9d63-34256c4ab600.jpeg",
      preview: false
    },
    {
      spotId: 14,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-772165025645316142/original/40c958eb-c129-4076-8206-e348fed31879.jpeg",
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
