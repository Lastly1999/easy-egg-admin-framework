'use strict';

const Service = require('egg').Service;

module.exports = class UserService extends Service {
  async checkUser(userName) {
    const user = await this.app.model.UserModel.findOne({
      where: { name: userName },
    });
    return user;
  }
};
