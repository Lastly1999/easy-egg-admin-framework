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
      where: { id },
      include: [
        {
          model: ctx.model.SysRoleModel,
          as: 'role',
          // include: [
          //   {
          //     model: ctx.model.SysMenuModel,
          //     as: 'menu',
          //     attributes: [ 'id', 'name', 'path', 'icon', 'parentId' ],
          //     through: {
          //       attributes: [],
          //     },
          //   },
          // ],
        },
      ],
    });
    // const menuList = user.role.menu;
    return user;
  }
};
