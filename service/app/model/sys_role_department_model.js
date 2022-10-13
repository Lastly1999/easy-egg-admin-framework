'use strict';

/**
 *
 * @param {Egg.Application} app
 */
module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  /**
   *  角色部门表
   */
  const RoleDepartment = app.model.define(
    'sys_role_department',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 角色ID
      roleId: INTEGER, // 角色id
      departmentId: INTEGER, // 部门id
      createAt: DATE, // 创建时间
      updateAt: DATE, // 更新时间
    },
    {
      tableName: 'sys_role_department',
    }
  );
  return RoleDepartment;
};
