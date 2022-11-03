'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.post('/auth/login', app.controller.authController.login);
  app.get('/auth/getAuthList', app.controller.authController.getAuthList);
  app.get('/user', app.controller.userController.all);
};
