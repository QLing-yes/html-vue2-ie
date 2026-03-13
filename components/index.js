/* ============================================================
   components/index.js — 组件注册表

   新增组件只需改这一个文件：
   1. 在 define([...]) 里加一行依赖路径
   2. 在回调参数里加对应变量
   3. 在 return {} 里加注册名

   main.js 和 index.html 永远不用动。
   ============================================================ */

define([
  'components/AppHeader/index',
  'components/TaskCard/index',
  'components/AddModal/index'
  /* ↑ 新增组件在这里加一行 */
], function(
  AppHeader,
  TaskCard,
  AddModal
  /* ↑ 对应加参数 */
) {

  return {
    'app-header': AppHeader,
    'task-card':  TaskCard,
    'add-modal':  AddModal
    /* ↑ 对应加注册名 */
  };

});
