'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const User = app.model.define(
    'sys_user',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(255),
      username: STRING(255),
      password: STRING(255),
      nick_name: STRING(255),
      head_img: STRING(255),
      email: STRING(255),
      phone: STRING(255),
      remark: STRING(255),
      status: INTEGER,
      createdAt: DATE,
      updatedAt: DATE,
    },
    {
      tableName: 'sys_user',
    }
  );
  return User;
};
