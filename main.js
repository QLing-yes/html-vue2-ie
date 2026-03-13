/* ============================================================
   main.js — 初始化后永远不需要改动
   新增组件只需修改 components/index.js
   ============================================================ */

requirejs.config({
  baseUrl: '',
  paths: {
    css:  'plugins/css',
    text: 'plugins/text'
  }
});

require(['components/index'], function(components) {

  new Vue({
    el: '#app',
    components: components,   /* 直接使用注册表对象 */

    data: function() {
      return {
        filter:    'all',
        showModal: false,
        nextId:    5,
        tasks: [
          {
            id: 1, title: '调研 IE11 兼容方案',
            desc: '整理无编译步骤下可用的框架清单',
            priority: 'high', tag: '调研', assignee: '李明', done: true
          },
          {
            id: 2, title: '搭建 Vue 2 CDN 多文件项目',
            desc: 'x-template + RequireJS + text 插件',
            priority: 'high', tag: '前端', assignee: '王芳', done: false
          },
          {
            id: 3, title: '接入 polyfill',
            desc: '确保 Promise / fetch 在 IE11 可用',
            priority: 'medium', tag: '兼容', assignee: '李明', done: false
          },
          {
            id: 4, title: '补充组件文档',
            desc: 'props / events 使用说明',
            priority: 'low', tag: '文档', assignee: '张伟', done: false
          }
        ]
      };
    },

    computed: {
      pendingCount: function() {
        return this.tasks.filter(function(t) { return !t.done; }).length;
      },
      doneCount: function() {
        return this.tasks.filter(function(t) { return t.done; }).length;
      },
      filteredTasks: function() {
        var f = this.filter;
        return this.tasks.filter(function(t) {
          if (f === 'todo') return !t.done;
          if (f === 'done') return  t.done;
          return true;
        });
      }
    },

    methods: {
      toggleTask: function(id) {
        var task = this.tasks.find(function(t) { return t.id === id; });
        if (task) { task.done = !task.done; }
      },
      removeTask: function(id) {
        var idx = this.tasks.findIndex(function(t) { return t.id === id; });
        if (idx !== -1) { this.tasks.splice(idx, 1); }
      },
      addTask: function(data) {
        this.tasks.push({
          id: this.nextId++,
          title: data.title, desc: data.desc,
          priority: data.priority, tag: data.tag,
          assignee: data.assignee, done: false
        });
      }
    }
  });

});
