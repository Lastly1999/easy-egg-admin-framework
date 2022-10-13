'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  /**
   *  角色菜单表
   */
  const RoleMenu = app.model.define(
    'sys_role_menu',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 角色ID
      roleId: INTEGER, // 角色id
      menuId: INTEGER, // 菜单id
      createdAt: DATE, // 创建时间
      updatedAt: DATE, // 更新时间
    },
    {
      tableName: 'sys_role_menu',
    }
  );
  return RoleMenu;
};
