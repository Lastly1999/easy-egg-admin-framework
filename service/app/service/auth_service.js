'use strict';

const { Service } = require('egg');

module.exports = class AuthService extends Service {
  /**
   * 获取用户菜单
   * @param id
   */
  async getAuthList(id) {
    const { ctx } = this;
    const user = await ctx.model.SysUserModel.findOne({
      include: { model: ctx.model.SysRoleModel },
      where: { id },
    });
    // const menuList = user.role.menu;
    return user;
  }
};
