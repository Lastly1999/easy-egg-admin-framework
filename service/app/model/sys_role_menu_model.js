'use strict';

const Role = require('./sys_role_model');
const Menu = require('./sys_menu_model');

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
      roleId: {
        type: INTEGER,
        references: {
          model: Role,
          key: 'id',
        },
      }, // 角色id
      menuId: {
        type: INTEGER,
        references: {
          model: Menu,
          key: 'id',
        },
      }, // 菜单id
      createdAt: DATE, // 创建时间
      updatedAt: DATE, // 更新时间
    },
    {
      tableName: 'sys_role_menu',
    }
  );

  RoleMenu.associations = function() {
    app.model.SysMenuModel.belongsToMany(app.model.SysRoleModel, {
      through: RoleMenu,
      foreignKey: 'menu_id',
      otherKey: 'role_id',
    });
    app.model.SysRoleModel.belongsToMany(app.model.SysMenuModel, {
      through: RoleMenu,
      foreignKey: 'role_id',
      otherKey: 'menu_id',
    });
  };

  return RoleMenu;
};
