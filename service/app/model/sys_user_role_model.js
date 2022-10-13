'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  /**
   *  用户角色表
   */
  const SysUserRole = app.model.define(
    'sys_user_role',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      userId: INTEGER,
      role_id: INTEGER,
      createdAt: DATE,
      updatedAt: DATE,
    },
    {
      tableName: 'sys_user_role',
    }
  );
  return SysUserRole;
};
