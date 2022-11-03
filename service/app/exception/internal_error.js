const HttpException = require('./http');
const HTTP_STATUS_ENUM = require('./constStatus');

class InternalError extends HttpException {
  constructor(
    message = '服务器异常',
    errorCode = HTTP_STATUS_ENUM.SERVICE_EXCEPTIONS
  ) {
    super(message, errorCode, null, 404);
  }
}

module.exports = InternalError;
