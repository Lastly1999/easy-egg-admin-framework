'use strict';

const { Controller } = require('egg');

module.exports = class BaseController extends Controller {
  /**
   * 请求成功统一返回格式
   * @param root0
   * @param root0.data
   * @param root0.message
   */
  success({ data = null, message = 'success' }) {
    const timestarp = new Date().getTime();
    this.ctx.body = {
      code: 200,
      message,
      timestarp,
      path: this.ctx.request.path,
      data,
    };
  }

  /**
   * 获取请求参数
   */
  get jsonBody() {
    return this.ctx.request.body;
  }
};
