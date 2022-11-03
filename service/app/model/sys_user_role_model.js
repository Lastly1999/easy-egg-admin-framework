'use strict';
const User = require('./sys_user_model');
const Role = require('./sys_role_model');

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
      userId: {
        type: INTEGER,
        references: {
          model: User, // 'User' 也可以使用
          key: 'id',
        },
      },
      roleId: {
        type: INTEGER,
        references: {
          model: Role,
          key: 'id',
        },
      },
      createdAt: DATE,
      updatedAt: DATE,
    },
    {
      tableName: 'sys_user_role',
    }
  );

  SysUserRole.associations = function() {
    app.model.SysUserModel.belongsToMany(app.model.SysRoleModel, {
      through: SysUserRole,
      foreignKey: 'user_id',
      otherKey: 'role_id',
    });
    app.model.SysRoleModel.belongsToMany(app.model.SysUserModel, {
      through: SysUserRole,
      foreignKey: 'role_id',
      otherKey: 'user_id',
    });
  };

  return SysUserRole;
};
