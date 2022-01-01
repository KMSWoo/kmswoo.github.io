(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{679:function(e,t,n){"use strict";n.r(t);var r=n(47),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("jsDelivr是一款免费开源的公共CDN服务，很多站长会把网站的静态文件通过jsDelivr加速来访问，这样既实现了对网站的加速，又能节约不少网站的流量，可谓是神器。")]),e._v(" "),n("h2",{attrs:{id:"什么是cdn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是cdn"}},[e._v("#")]),e._v(" 什么是CDN")]),e._v(" "),n("p",[e._v("CDN的全称是Content Delivery Network，即内容分发网络。CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术。")]),e._v(" "),n("h2",{attrs:{id:"基本原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[e._v("#")]),e._v(" 基本原理")]),e._v(" "),n("p",[e._v("CDN的"),n("strong",[e._v("基本原理")]),e._v("是广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对集中的地区或网络中，在用户访问网站时，利用全局负载技术将用户的访问指向距离最近的工作正常的缓存服务器上，由缓存服务器直接响应用户请求。")]),e._v(" "),n("p",[e._v("CDN的"),n("strong",[e._v("基本思路")]),e._v("是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。其目的是使用户可就近取得所需内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。")]),e._v(" "),n("p",[e._v("简单来说就是尽量让用户从最近的且最空闲的地方取东西，这样自然是最快的。")]),e._v(" "),n("h2",{attrs:{id:"jsdelivr的使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsdelivr的使用方法"}},[e._v("#")]),e._v(" jsDelivr的使用方法")]),e._v(" "),n("p",[n("strong",[e._v("jsDelivr")]),e._v("官网："),n("a",{attrs:{href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jsDelivr - A free, fast, and reliable CDN for open source"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("进入"),n("strong",[e._v("jsDelivr")]),e._v("的官网，我们能看到首页有三个网站，可以使用jsDelivr加速资源访问，分别是：nmp、github等，这里我们逐一做下说明。")]),e._v(" "),n("h3",{attrs:{id:"nmp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nmp"}},[e._v("#")]),e._v(" nmp")]),e._v(" "),n("div",{staticClass:"language-web-idl extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// 加载npm上托管的项目\n\nhttps://cdn.jsdelivr.net/npm/package@version/file\n\nhttps://cdn.jsdelivr.net/npm/包名@版本号/目录\n\n// 例如，加载jQuery v3.2.1版本\n\nhttps://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js\n\n// 或者加载jquery目录\n\n// 提示：目录后面的"/"不能省略，否则无法访问\n\nhttps://cdn.jsdelivr.net/npm/jquery/\n')])])]),n("h3",{attrs:{id:"github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[e._v("#")]),e._v(" github")]),e._v(" "),n("p",[e._v("很多人的资源托管在github上，其中不乏大量通过hexo等搭建的静态博客。但是国内访问github速度终究不是很理想，而国产的gitee虽然能替代大部分的使用场景，却总是在细节上不尽人意，最重要的是要上传本人手持身份证的照片，呃~")]),e._v(" "),n("p",[e._v("这个时候jsDelivr的加速就十分的有用。")]),e._v(" "),n("div",{staticClass:"language-web-idl extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// 加载github上的项目分支\n\n// 提示：建议支持npm的项目使用npm\n\nhttps://cdn.jsdelivr.net/gh/user/repo@version/file\n\nhttps://cdn.jsdelivr.net/gh/用户名/仓库名称@版本号/目录\n\n// 例如，加载jQuery v3.2.1版本\n\nhttps://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js\n\n// 或者加载jquery目录\n\n// 提示：目录后面的"/"不能省略，否则无法访问\n\nhttps://cdn.jsdelivr.net/gh/jquery/jquery/\n')])])]),n("p",[e._v("目前GITHUB仓库容量是没有上限的！不过官方推荐在1G以内！ 仓库单个文件50M会收到警告，大于100M会被拒绝！ jsDelivr仅能针对50M以下的文件CDN加速！")]),e._v(" "),n("hr")])}),[],!1,null,null,null);t.default=s.exports}}]);