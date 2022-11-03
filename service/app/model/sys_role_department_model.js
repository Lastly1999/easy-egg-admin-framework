'use strict';

const Department = require('./sys_department_model');
const Role = require('./sys_role_model');

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
      roleId: {
        type: INTEGER,
        references: {
          model: Role,
          key: 'id',
        },
      }, // 角色id
      departmentId: {
        type: INTEGER,
        references: {
          model: Department,
          key: 'id',
        },
      }, // 部门id
      createAt: DATE, // 创建时间
      updateAt: DATE, // 更新时间
    },
    {
      tableName: 'sys_role_department',
    }
  );

  RoleDepartment.associations = function() {
    app.model.SysDepartmentModel.belongsToMany(app.model.SysRoleModel, {
      through: RoleDepartment,
      foreignKey: 'dep_id',
      otherKey: 'role_id',
    });
    app.model.SysRoleModel.belongsToMany(app.model.SysDepartmentModel, {
      through: RoleDepartment,
      foreignKey: 'role_id',
      otherKey: 'dep_id',
    });
  };

  return RoleDepartment;
};
