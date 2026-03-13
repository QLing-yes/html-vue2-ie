最终结构：
```
├── index.html              ← 永远不动
├── main.js                 ← 永远不动
├── plugins/
│   ├── css.js              ← 自动注入 <link>
│   └── text.js             ← 新增：XHR 加载 template.html
├── styles/base.css
└── components/
    ├── index.js            ← 唯一需要改的地方（新增组件时）
    ├── AppHeader/
    │   ├── template.html   ← 干净的 HTML，有语法高亮
    │   ├── index.js        ← 只有 props / data / methods
    │   └── index.css       ← 作用域样式 .hd-
    ├── TaskCard/ ...
    └── AddModal/ ...
```
新增一个组件只需三步：
```
1. 创建文件夹  components/MyWidget/
               ├── template.html
               ├── index.js
               └── index.css
```
```js
2. index.js 固定格式
define(['text!components/MyWidget/template.html', 'css!components/MyWidget/index'], function(template) {
  return { template: template, props: { ... } };
});
```
```js
3. components/index.js 加三行
define(['components/MyWidget/index', ...], function(MyWidget, ...) {
  return { 'my-widget': MyWidget, ... };
});
```
index.html 和 main.js 完全不用碰。