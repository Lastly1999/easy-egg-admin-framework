'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.post('/auth/login', app.controller.authController.login);
};
