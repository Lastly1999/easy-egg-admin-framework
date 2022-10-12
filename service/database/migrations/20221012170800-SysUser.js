'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('sys_user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(255),
      username: STRING(255),
      password: STRING(255),
      nick_name: STRING(255),
      head_img: STRING(255),
      email: STRING(255),
      phone: STRING(255),
      remark: STRING(255),
      test: STRING(255),
      status: INTEGER,
      createdAt: DATE,
      updatedAt: DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('sys_user');
  },
};
