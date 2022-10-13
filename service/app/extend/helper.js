module.exports = {
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
  },

  fail({ message = 'fail' }) {
    this.ctx.body = {
      code: 500,
      message,
      timestarp: new Date().getTime(),
      path: this.ctx.request.path,
      data: null,
    };
  },
};
