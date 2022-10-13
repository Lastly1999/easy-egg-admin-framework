'use strict';

const Service = require('egg').Service;

module.exports = class UserService extends Service {
  /**
   * 验证用户是否存在
   * @param {string} username
   * @param {string} password
   * @return
   */
  async checkUser(username, password) {
    const user = await this.app.model.SysUserModel.findOne({
      where: { username, password },
    });
    if (!user) {
      this.ctx.throw(500, '密码错误,请重新输入');
    }
    return user;
  }

  async test() {
    return await this.app.model.SysUserRoleModel.findAll({});
  }
};
