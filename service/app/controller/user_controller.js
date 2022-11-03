'use strict';

const BaseController = require('./base_controller');

class UserController extends BaseController {
  async all() {
    const users = await this.ctx.service.userService.test();
    this.success({ data: users });
  }
}

module.exports = UserController;
