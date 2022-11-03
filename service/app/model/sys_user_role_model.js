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
      roleId: INTEGER,
      createdAt: DATE,
      updatedAt: DATE,
    },
    {
      tableName: 'sys_user_role',
    }
  );

  SysUserRole.associate = function() {
    app.model.SysUserModel.belongsToMany(app.model.SysRoleModel, {
      through: SysUserRole,
      foreignKey: 'user_id',
      targetKey: 'id',
    });
    app.model.SysRoleModel.belongsToMany(app.model.SysUserModel, {
      through: SysUserRole,
      foreignKey: 'role_id',
      targetKey: 'id',
    });
  };

  return SysUserRole;
};
