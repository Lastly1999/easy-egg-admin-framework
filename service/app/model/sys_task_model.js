'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { INTEGER, TINYINT, STRING, DATE, TEXT } = app.Sequelize;
  /**
   *  任务表
   */
  const Task = app.model.define(
    'sys_task',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(255), // 任务名称
      service: STRING(255), // 服务名称
      type: TINYINT, // 任务类型 1:定时任务 2:一次性任务
      status: TINYINT, // 任务状态 1:启用 2:禁用
      startTime: DATE, // 开始时间
      endTime: DATE, // 结束时间
      limit: INTEGER, // 限制次数
      cron: STRING(255), // cron表达式
      every: INTEGER(255), // 每隔多少秒执行一次
      data: TEXT, // 任务数据
      jobOpts: TEXT, // job配置
      remark: STRING(255), // 备注
      createdAt: DATE, // 创建时间
      updatedAt: DATE, // 更新时间
    },
    {
      tableName: 'sys_task',
    }
  );
  return Task;
};
