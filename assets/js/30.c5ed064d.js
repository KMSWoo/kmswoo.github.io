(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{646:function(t,s,a){"use strict";a.r(s);var e=a(47),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Do not access Object.prototype method 'hasOwnProperty' from target object. eslint(no-prototype-builtins)。")]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("最近在开发中遇到一个 ESLint 规则问题：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("ESLint 给出错误提示：")]),t._v(" "),a("blockquote",[a("p",[t._v("Do not access Object.prototype method 'hasOwnProperty' from target object. eslint(no-prototype-builtins)")])]),t._v(" "),a("p",[t._v("当时没想明白这个规则的设计点在哪里。根据其文字提示“不要从目标对象访问 Object 原型方法”，想到一种解决方案——直接找到这个方法，用 call 改变指向调用：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("今天在想到原型链的时候突然意识到为何 ESLint 不允许从目标对象调用 Object 原型方法。")]),t._v(" "),a("p",[t._v("在 JS 中，往往通过改变原型链实现继承。一旦原型链发生改变，原先可以访问到的原型属性、方法便可能无法访问。考虑最极端的情况，若 obj 原先原型链的最顶端是 Object，此时可以通过原型链访问 Object.hasOwnProperty 方法；而若改变后，顶端不再是 Object，那么访问 obj.hasOwnProperty 访问就会得到 undefined。因此，直接从对象访问原型方法，很可能会带来隐藏的 BUG。")]),t._v(" "),a("p",[t._v("直接在 Object 对象上调用其方法，利用 call 改变其 this 指向到我们的目标对象上，即可安全使用 hasOwnProperty 方法了。")]),t._v(" "),a("hr")])}),[],!1,null,null,null);s.default=n.exports}}]);