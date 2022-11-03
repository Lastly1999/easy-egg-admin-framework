'use strict';

const HTTP_STATUS_ENUM = require('./constStatus');

class HttpException extends Error {
  constructor(code = HTTP_STATUS_ENUM.SERVICE_EXCEPTIONS, message = '服务器异常', data = null, httpCode = HTTP_STATUS_ENUM.SERVICE_EXCEPTIONS) {
    super();
    this.code = code; // 自定义状态码
    this.msg = message; // 自定义返回消息
    this.data = data; // 自定义返回数据
    this.httpCode = httpCode; // http状态码
  }
}

module.exports = HttpException;
