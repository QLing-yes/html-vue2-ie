/* ============================================================
   components/AppHeader/index.js
   声明自己的模板和样式，外部无需关心内部细节
   ============================================================ */

define([
  'text!components/AppHeader/template.html',
  'css!components/AppHeader/index'
], function(template) {

  return {
    template: template,
    props: {
      title:        { type: String, default: '任务板' },
      pendingCount: { type: Number, default: 0 },
      doneCount:    { type: Number, default: 0 }
    }
  };

});
