(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{519:function(s,a,t){"use strict";t.r(a);var r=t(6),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#提取指令"}},[s._v("提取指令")])]),t("li",[t("a",{attrs:{href:"#排序指令"}},[s._v("排序指令")])]),t("li",[t("a",{attrs:{href:"#双向输出重定向"}},[s._v("双向输出重定向")])]),t("li",[t("a",{attrs:{href:"#字符转换指令"}},[s._v("字符转换指令")])])])]),t("p"),s._v(" "),t("p",[s._v("管道是将一个命令的标准输出作为另一个命令的标准输入，在数据需要经过多个步骤的处理之后才能得到我们想要的内容时就可以使用管道。")]),s._v(" "),t("p",[s._v("在命令之间使用 | 分隔各个管道命令。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ ls "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("al "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" less\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"提取指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提取指令"}},[s._v("#")]),s._v(" 提取指令")]),s._v(" "),t("p",[t("code",[s._v("cut")]),s._v(" 对数据进行切分，取出想要的部分。")]),s._v(" "),t("p",[s._v("切分过程一行一行地进行。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ cut\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d ：分隔符\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f ：经过 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d 分隔后，使用 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f n 取出第 n 个区间\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c ：以字符为单位取出区间\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("示例 1："),t("code",[s._v("last")]),s._v(" 显示登入者的信息，取出用户名。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ last\nroot pts"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("201.101")]),s._v(" Sat Feb "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(" still logged in\nroot pts"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("201.101")]),s._v(" Fri Feb "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nroot pts"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("201.254")]),s._v(" Thu Feb "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n$ last "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cut "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("示例 2：将 "),t("code",[s._v("export")]),s._v(" 输出的信息，取出第 "),t("code",[s._v("12")]),s._v(" 字符以后的所有字符串。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v("\ndeclare "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x HISTCONTROL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ignoredups"')]),s._v("\ndeclare "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x HISTSIZE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1000"')]),s._v("\ndeclare "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x HOME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/dmtsai"')]),s._v("\ndeclare "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x HOSTNAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"study.centos.vbird"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("其他省略"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cut "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"排序指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排序指令"}},[s._v("#")]),s._v(" 排序指令")]),s._v(" "),t("p",[t("code",[s._v("sort")]),s._v(" 用于排序。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ sort "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("fbMnrtuk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("stdin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f ：忽略大小写\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("b ：忽略最前面的空格\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("M ：以月份的名字来排序，例如 JAN，DEC\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("n ：使用数字\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r ：反向排序\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u ：相当于 unique，重复的内容只出现一次\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t ：分隔符，默认为 tab\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("k ：指定排序的区间\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("示例："),t("code",[s._v("/etc/passwd")]),s._v(" 文件内容以 "),t("code",[s._v(":")]),s._v(" 来分隔，要求以第三列进行排序。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ cat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("passwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sort "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("k "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nroot"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bash\ndmtsai"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("dmtsai"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dmtsai"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bash\nalex"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("alex"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bash\narod"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("arod"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("code",[s._v("uniq")]),s._v(" 可以将重复的数据只取一个。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ uniq "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i ：忽略大小写\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c ：进行计数\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("示例：取得每个人的登录总次数")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ last "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cut "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sort "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" uniq "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unknown\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" dmtsai\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" reboot\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" root\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" wtmp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"双向输出重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双向输出重定向"}},[s._v("#")]),s._v(" 双向输出重定向")]),s._v(" "),t("p",[s._v("输出重定向会将输出内容重定向到文件中，而 "),t("code",[s._v("tee")]),s._v(" 不仅能够完成这个功能，还能保留屏幕上的输出。也就是说，使用 "),t("code",[s._v("tee")]),s._v(" 指令，一个输出会同时传送到文件和屏幕上。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ tee "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" file\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"字符转换指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符转换指令"}},[s._v("#")]),s._v(" 字符转换指令")]),s._v(" "),t("p",[t("code",[s._v("tr")]),s._v(" 用来删除一行中的字符，或者对字符进行替换。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ tr "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ds"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" SET1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d ： 删除行中 SET1 这个字符串\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("示例，将 "),t("code",[s._v("last")]),s._v(" 输出的信息所有小写转换为大写。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ last "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" tr "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[a-z]'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[A-Z]'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("col")]),s._v(" 将 "),t("code",[s._v("tab")]),s._v(" 字符转为空格字符。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ col "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("xb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x ： 将 tab 键转换成对等的空格键\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("code",[s._v("expand")]),s._v(" 将 "),t("code",[s._v("tab")]),s._v(" 转换一定数量的空格，默认是 "),t("code",[s._v("8")]),s._v(" 个。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ expand "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" file\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t ：tab 转为空格的数量\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("code",[s._v("join")]),s._v(" 将有相同数据的那一行合并在一起。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ join "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ti12"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" file1 file2\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t ：分隔符，默认为空格\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i ：忽略大小写的差异\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ：第一个文件所用的比较字段\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ：第二个文件所用的比较字段\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("code",[s._v("paste")]),s._v(" 直接将两行粘贴在一起。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("$ paste "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" file1 file2\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d ：分隔符，默认为 tab\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);