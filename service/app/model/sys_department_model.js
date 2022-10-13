'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  /**
   * 部门表
   */
  const Department = app.model.define(
    'sys_department',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 部门ID
      parentId: INTEGER, // 父部门ID
      name: STRING(255), // 部门名称
      orderNum: INTEGER, // 排序
      createdAt: DATE, // 创建时间
      updatedAt: DATE, // 更新时间
    },
    {
      tableName: 'sys_department',
    }
  );
  return Department;
};
