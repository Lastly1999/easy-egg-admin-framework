'use strict';

const HttpException = require('../exception/http');

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
      throw new HttpException(401, '用户名或密码错误');
    }
    return user;
  }

};
