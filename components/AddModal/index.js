/* ============================================================
   components/AddModal/index.js
   ============================================================ */

define([
  'text!components/AddModal/template.html',
  'css!components/AddModal/index'
], function(template) {

  return {
    template: template,
    data: function() {
      return {
        form: { title: '', desc: '', priority: 'medium', tag: '', assignee: '' }
      };
    },
    methods: {
      submit: function() {
        var title = this.form.title.trim();
        if (!title) { alert('请输入任务名称'); return; }
        this.$emit('submit', {
          title:    title,
          desc:     this.form.desc.trim(),
          priority: this.form.priority,
          tag:      this.form.tag.trim(),
          assignee: this.form.assignee.trim()
        });
        this.reset();
        this.$emit('close');
      },
      reset: function() {
        this.form.title = ''; this.form.desc = '';
        this.form.priority = 'medium';
        this.form.tag = ''; this.form.assignee = '';
      }
    }
  };

});
