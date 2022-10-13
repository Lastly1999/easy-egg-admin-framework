'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // 启用sequelize插件
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // egg-jwt
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
