'use strict';

const BaseController = require('./base_controller');

class AuthController extends BaseController {
  async login() {
    const { userName, passWord } = this.jsonBody;
    const data = await this.ctx.service.userService.checkUser(
      userName,
      passWord
    );
    this.ctx.helper.success({ data });
  }
  async getAuthList() {
    const { id } = this.ctx.query;
    const data = await this.ctx.service.authService.getAuthList(id);
    this.ctx.helper.success({ data });
  }
}

module.exports = AuthController;
