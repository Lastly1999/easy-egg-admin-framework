'use strict';

const Service = require('egg').Service;

module.exports = class UserService extends Service {
  /**
   * 验证用户是否存在
   * @param {string} userName
   * @return
   */
  async checkUser(userName) {
    const user = await this.app.model.SysUserModel.findOne({
      where: { name: userName },
    });
    return user;
  }

  async test() {
    return await this.app.model.SysUserRoleModel.findAll({});
  }
};
