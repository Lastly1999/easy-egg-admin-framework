'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;
  /**
   *  角色表
   */
  const Role = app.model.define(
    'sys_role',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 角色ID
      userId: INTEGER, // 用户id
      name: STRING(255), // 角色名称
      remark: STRING(255), // 备注
      label: STRING(255), // 标签
      createdAt: DATE, // 创建时间
      updatedAt: DATE, // 更新时间
    },
    {
      tableName: 'sys_role',
    }
  );
  return Role;
};
