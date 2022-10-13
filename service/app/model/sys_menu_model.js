'use strict';

/**
 * @param {Egg.Application} app
 */
module.exports = app => {
  const { INTEGER, STRING, TINYINT, DATE } = app.Sequelize;
  /**
   * 菜单表
   */
  const Menu = app.model.define(
    'sys_menu',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 菜单ID
      parentId: INTEGER, // 父菜单ID，一级菜单为0
      name: STRING(255), // 菜单名称
      router: STRING(255), // 路由
      perms: STRING(255), // 权限标识
      type: TINYINT, // 类型 0：目录 1：菜单 2：按钮
      icon: STRING(255), // 菜单图标
      orderNum: INTEGER, // 排序
      viewPath: STRING(255), // 页面路径
      isShow: TINYINT, // 是否显示
      createAt: DATE, // 创建时间
      updateAt: DATE, // 更新时间
    },
    {
      tableName: 'sys_menu',
    }
  );

  return Menu;
};
