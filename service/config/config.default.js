/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1665500404762_9191';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: [ '*' ],
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '192.168.154.128',
    port: 3306,
    username: 'root',
    password: '123456',
    freezeTableName: true,
    database: 'egg-admin-default-db',
  };

  return {
    ...config,
    ...userConfig,
  };
};
