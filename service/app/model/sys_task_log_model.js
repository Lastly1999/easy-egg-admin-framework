'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { INTEGER, DATE, TEXT, TINYINT } = app.Sequelize;
  /**
   *  任务日志表
   */
  const TaskLog = app.model.define(
    'sys_task_log',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 任务日志ID
      taskId: INTEGER, // 任务id
      status: TINYINT, // 任务状态 1:成功 2:失败
      detail: TEXT, // 任务详情
      consumeTime: INTEGER, // 消耗时间
      createdAt: DATE, // 创建时间
      updatedAt: DATE, // 更新时间
    },
    {
      tableName: 'sys_task_log',
    }
  );
  return TaskLog;
};
