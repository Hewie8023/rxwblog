(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{515:function(t,a,s){"use strict";s.r(a);var r=s(6),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#求助"}},[t._v("求助")]),s("ul",[s("li",[s("a",{attrs:{href:"#help"}},[t._v("--help")])]),s("li",[s("a",{attrs:{href:"#man"}},[t._v("man")])]),s("li",[s("a",{attrs:{href:"#info"}},[t._v("info")])]),s("li",[s("a",{attrs:{href:"#doc"}},[t._v("doc")])])])]),s("li",[s("a",{attrs:{href:"#关机"}},[t._v("关机")]),s("ul",[s("li",[s("a",{attrs:{href:"#who"}},[t._v("who")])]),s("li",[s("a",{attrs:{href:"#sync"}},[t._v("sync")])]),s("li",[s("a",{attrs:{href:"#shutdown"}},[t._v("shutdown")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"求助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求助"}},[t._v("#")]),t._v(" 求助")]),t._v(" "),s("h3",{attrs:{id:"help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[t._v("#")]),t._v(" --help")]),t._v(" "),s("p",[t._v("指令的基本用法与选项介绍。")]),t._v(" "),s("h3",{attrs:{id:"man"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#man"}},[t._v("#")]),t._v(" man")]),t._v(" "),s("p",[s("code",[t._v("man")]),t._v(" 是 "),s("code",[t._v("manual")]),t._v(" 的缩写，将指令的具体信息显示出来。")]),t._v(" "),s("p",[t._v("当执行 "),s("code",[t._v("man date")]),t._v(" 时，有 "),s("code",[t._v("DATE(1)")]),t._v(" 出现，其中的数字代表指令的类型，常用的数字及其类型如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("代号")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("用户在 shell 环境中可以操作的指令或者可执行文件")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("配置文件")])]),t._v(" "),s("tr",[s("td",[t._v("8")]),t._v(" "),s("td",[t._v("系统管理员可以使用的管理指令")])])])]),t._v(" "),s("h3",{attrs:{id:"info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[t._v("#")]),t._v(" info")]),t._v(" "),s("p",[s("code",[t._v("info")]),t._v(" 与 "),s("code",[t._v("man")]),t._v(" 类似，但是 "),s("code",[t._v("info")]),t._v(" 将文档分成一个个页面，每个页面可以进行跳转。")]),t._v(" "),s("h3",{attrs:{id:"doc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doc"}},[t._v("#")]),t._v(" doc")]),t._v(" "),s("p",[s("code",[t._v("/usr/share/doc")]),t._v(" 存放着软件的一整套说明文件。")]),t._v(" "),s("h2",{attrs:{id:"关机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关机"}},[t._v("#")]),t._v(" 关机")]),t._v(" "),s("h3",{attrs:{id:"who"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#who"}},[t._v("#")]),t._v(" who")]),t._v(" "),s("p",[t._v("在关机前需要先使用 "),s("code",[t._v("who")]),t._v(" 命令查看有没有其它用户在线。")]),t._v(" "),s("h3",{attrs:{id:"sync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync"}},[t._v("#")]),t._v(" sync")]),t._v(" "),s("p",[t._v("为了加快对磁盘文件的读写速度，位于内存中的文件数据不会立即同步到磁盘上，因此关机之前需要先进行 "),s("code",[t._v("sync")]),t._v(" 同步操作。")]),t._v(" "),s("h3",{attrs:{id:"shutdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shutdown"}},[t._v("#")]),t._v(" shutdown")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("# shutdown [-krhc] 时间 [信息]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("k ： 不会关机，只是发送警告信息，通知所有在线的用户\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r ： 将系统的服务停掉后就重新启动\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("h ： 将系统的服务停掉后就立即关机\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c ： 取消已经在进行的 shutdown 指令内容\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);