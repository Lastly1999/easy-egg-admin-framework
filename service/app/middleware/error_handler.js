'use strict';

const HttpException = require('../exception/http');

module.exports = () => {
  return async function(ctx, next) {
    const method = ctx.method.toLowerCase();
    // 当请求方法为options时，直接返回
    if (method === 'OPTIONS') {
      ctx.body = 204;
      return;
    }
    // 捕获处理异常
    try {
      await next();
    } catch (err) {
      // 判断是否为自定义异常
      if (err instanceof HttpException) {
        ctx.body = {
          code: err.code,
          message: err.msg,
          timestarp: new Date().getTime(),
          path: ctx.request.path,
          data: err.data,
        };
        return;
      }
      // 其他参数异常问题
      ctx.status = 500;
      ctx.body = {
        code: 500,
        message: err.message || '服务器异常',
        timestarp: new Date().getTime(),
        path: ctx.request.path,
        data: null,
      };
    }
  };
};
