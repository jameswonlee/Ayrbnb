'use strict';
const bcrypt = require("bcryptjs");

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
     await queryInterface.bulkInsert('Users', [
      {
        username: 'demo-user',
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'Lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'jameslee',
        email: 'jameslee@gmail.com',
        firstName: 'James',
        lastName: 'Lee',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'kmware',
        email: 'kmware@mac.com',
        firstName: 'Kyle',
        lastName: 'Ware',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        username: 'jeshilee',
        email: 'jeshilee@gmail.com',
        firstName: 'Jessica',
        lastName: 'Lee',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        username: 'johnlee',
        email: 'johnlee@gmail.com',
        firstName: 'John',
        lastName: 'Lee',
        hashedPassword: bcrypt.hashSync('password8')
      },
      {
        username: 'janelee',
        email: 'janelee@gmail.com',
        firstName: 'Jane',
        lastName: 'Lee',
        hashedPassword: bcrypt.hashSync('password9')
      },
      {
        username: 'susanware',
        email: 'susanware@gmail.com',
        firstName: 'Susan',
        lastName: 'Ware',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        username: 'mikeware',
        email: 'mikeware@gmail.com',
        firstName: 'Mike',
        lastName: 'Ware',
        hashedPassword: bcrypt.hashSync('password6')
      },
      {
        username: 'brentware',
        email: 'brentware@gmail.com',
        firstName: 'Brent',
        lastName: 'Ware',
        hashedPassword: bcrypt.hashSync('password7')
      },
      {
        username: 'davidrogers',
        email: 'davidrogers@gmail.com',
        firstName: 'David',
        lastName: 'Rogers',
        hashedPassword: bcrypt.hashSync('password10')
      },
      {
        username: 'marksmith',
        email: 'marksmith@gmail.com',
        firstName: 'Mark',
        lastName: 'Smith',
        hashedPassword: bcrypt.hashSync('password4')
      },
     
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users')
  }
};
