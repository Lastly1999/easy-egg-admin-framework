'use strict';

const BaseController = require('./base_controller');

module.exports = class AuthController extends BaseController {
  async login() {
    const { userName, passWord } = this.jsonBody;
    return await this.ctx.helper.success(this.ctx.service.userService.checkUser(userName, passWord));
  }
};
