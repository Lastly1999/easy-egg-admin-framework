'use strict';

const BaseController = require('./base_controller');

module.exports = class AuthController extends BaseController {
  async login() {
    const { userName } = this.jsonBody;
    const user = await this.ctx.service.userService.checkUser(userName);
    this.success({ data: user });
  }
};
