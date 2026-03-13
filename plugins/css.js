/* ============================================================
   plugins/css.js — RequireJS CSS 加载插件
   用法：define(['css!styles/TaskCard'], function() { ... })
   插件会自动插入 <link> 标签，加载完成后再执行模块回调
   ============================================================ */

define(function() {

  /* 记录已加载的 CSS，避免重复插入 */
  var loaded = {};

  function insertLink(url, callback) {
    if (loaded[url]) {
      callback();
      return;
    }
    loaded[url] = true;

    var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    /* IE11 用 onload；老版 IE 用 onreadystatechange */
    link.onload = function() { callback(); };
    link.onreadystatechange = function() {
      var s = link.readyState;
      if (s === 'loaded' || s === 'complete') {
        link.onreadystatechange = null;
        callback();
      }
    };
    /* CSS 加载失败不阻塞后续流程 */
    link.onerror = function() {
      console.warn('[css plugin] 加载失败：' + url);
      callback();
    };

    document.getElementsByTagName('head')[0].appendChild(link);
  }

  return {
    /*
      RequireJS 插件规范：实现 load 方法
      name    → 插件 ! 后的部分，如 'styles/TaskCard'
      req     → require 函数（用于 toUrl 路径转换）
      onload  → 加载完成后必须调用
      config  → requirejs 配置对象
    */
    load: function(name, req, onload, config) {
      /* 构建阶段（r.js 优化）直接跳过 */
      if (config.isBuild) {
        onload();
        return;
      }
      var url = req.toUrl(name + '.css');
      insertLink(url, function() {
        onload();
      });
    }
  };
});
