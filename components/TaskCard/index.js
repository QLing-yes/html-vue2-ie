/* ============================================================
   components/TaskCard/index.js
   ============================================================ */

define([
  'text!components/TaskCard/template.html',
  'css!components/TaskCard/index'
], function(template) {

  return {
    template: template,
    props: {
      task: { type: Object, required: true }
    },
    computed: {
      priorityLabel: function() {
        var map = { high: '高', medium: '中', low: '低' };
        return map[this.task.priority] || '';
      },
      initial: function() {
        return this.task.assignee ? this.task.assignee.charAt(0) : '';
      }
    }
  };

});
