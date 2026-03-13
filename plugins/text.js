/* ============================================================
   plugins/text.js — RequireJS HTML 模板加载插件
   用法：define(['text!components/Foo/template.html'], function(tpl) { ... })
   通过 XHR 加载文件内容，作为字符串传入回调
   注意：需要通过 HTTP 服务器访问（不支持 file:// 协议）
   ============================================================ */

define(function() {

  function load(name, req, onload, config) {
    /* 构建阶段跳过 */
    if (config.isBuild) { onload(); return; }

    var url = req.toUrl(name);

    /* IE11 原生支持 XMLHttpRequest */
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) { return; }
      /* status 0 对应本地 file:// 协议（某些浏览器）*/
      if (xhr.status === 200 || xhr.status === 0) {
        onload(xhr.responseText);
      } else {
        console.error('[text plugin] 加载失败：' + url + ' (' + xhr.status + ')');
        onload('');
      }
    };
    xhr.send(null);
  }

  return { load: load };
});
