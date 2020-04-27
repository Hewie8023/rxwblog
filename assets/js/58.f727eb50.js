(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{534:function(t,a,s){"use strict";s.r(a);var v=s(6),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#查看进程"}},[t._v("查看进程")]),s("ul",[s("li",[s("a",{attrs:{href:"#ps"}},[t._v("ps")])]),s("li",[s("a",{attrs:{href:"#pstree"}},[t._v("pstree")])]),s("li",[s("a",{attrs:{href:"#top"}},[t._v("top")])]),s("li",[s("a",{attrs:{href:"#netstat"}},[t._v("netstat")])])])]),s("li",[s("a",{attrs:{href:"#进程状态"}},[t._v("进程状态")])]),s("li",[s("a",{attrs:{href:"#sigchld"}},[t._v("SIGCHLD")])]),s("li",[s("a",{attrs:{href:"#wait"}},[t._v("wait()")])]),s("li",[s("a",{attrs:{href:"#waitpid"}},[t._v("waitpid()")])]),s("li",[s("a",{attrs:{href:"#孤儿进程"}},[t._v("孤儿进程")])]),s("li",[s("a",{attrs:{href:"#僵尸进程"}},[t._v("僵尸进程")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"查看进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看进程"}},[t._v("#")]),t._v(" 查看进程")]),t._v(" "),s("h3",{attrs:{id:"ps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[t._v("#")]),t._v(" ps")]),t._v(" "),s("p",[t._v("查看某个时间点的进程信息。")]),t._v(" "),s("p",[t._v("示例一：查看自己的进程")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("# ps -l")]),t._v("\n")])])]),s("p",[t._v("示例二：查看系统所有进程")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("# ps aux")]),t._v("\n")])])]),s("p",[t._v("示例三：查看特定的进程")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# ps aux | grep threadx\n")])])]),s("h3",{attrs:{id:"pstree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pstree"}},[t._v("#")]),t._v(" pstree")]),t._v(" "),s("p",[t._v("查看进程树。")]),t._v(" "),s("p",[t._v("示例：查看所有进程树")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("# pstree -A")]),t._v("\n")])])]),s("h3",{attrs:{id:"top"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[t._v("#")]),t._v(" top")]),t._v(" "),s("p",[t._v("实时显示进程信息。")]),t._v(" "),s("p",[t._v("示例：两秒钟刷新一次")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("# top -d 2")]),t._v("\n")])])]),s("h3",{attrs:{id:"netstat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#netstat"}},[t._v("#")]),t._v(" netstat")]),t._v(" "),s("p",[t._v("查看占用端口的进程")]),t._v(" "),s("p",[t._v("示例：查看特定端口的进程")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("# netstat -anp | grep port")]),t._v("\n")])])]),s("h2",{attrs:{id:"进程状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程状态"}},[t._v("#")]),t._v(" 进程状态")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("状态")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("R")]),t._v(" "),s("td",[t._v("running or runnable (on run queue) 正在执行或者可执行，此时进程位于执行队列中。")])]),t._v(" "),s("tr",[s("td",[t._v("D")]),t._v(" "),s("td",[t._v("uninterruptible sleep (usually I/O) 不可中断阻塞，通常为 IO 阻塞。")])]),t._v(" "),s("tr",[s("td",[t._v("S")]),t._v(" "),s("td",[t._v("interruptible sleep (waiting for an event to complete) 可中断阻塞，此时进程正在等待某个事件完成。")])]),t._v(" "),s("tr",[s("td",[t._v("Z")]),t._v(" "),s("td",[t._v("zombie (terminated but not reaped by its parent) 僵死，进程已经终止但是尚未被其父进程获取信息。")])]),t._v(" "),s("tr",[s("td",[t._v("T")]),t._v(" "),s("td",[t._v("stopped (either by a job control signal or because it is being traced)  结束，进程既可以被作业控制信号结束，也可能是正在被追踪。")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.ax1x.com/2019/10/31/KTYUBV.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"sigchld"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sigchld"}},[t._v("#")]),t._v(" SIGCHLD")]),t._v(" "),s("p",[t._v("当一个子进程改变了它的状态时（停止运行，继续运行或者退出），有两件事会发生在父进程中：")]),t._v(" "),s("ul",[s("li",[t._v("得到 "),s("code",[t._v("SIGCHLD")]),t._v(" 信号；")]),t._v(" "),s("li",[s("code",[t._v("waitpid()")]),t._v(" 或者 "),s("code",[t._v("wait()")]),t._v(" 调用会返回。")])]),t._v(" "),s("p",[t._v("其中子进程发送的 "),s("code",[t._v("SIGCHLD")]),t._v(" 信号包含了子进程的信息，比如进程 "),s("code",[t._v("ID")]),t._v("、进程状态、进程使用 "),s("code",[t._v("CPU")]),t._v(" 的时间等。")]),t._v(" "),s("p",[t._v("在子进程退出时，它的进程描述符不会立即释放，这是为了让父进程得到子进程信息，父进程通过 "),s("code",[t._v("wait()")]),t._v(" 和 "),s("code",[t._v("waitpid()")]),t._v(" 来获得一个已经退出的子进程的信息。")]),t._v(" "),s("h2",{attrs:{id:"wait"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wait"}},[t._v("#")]),t._v(" wait()")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("pid_t "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("父进程调用 "),s("code",[t._v("wait()")]),t._v(" 会一直阻塞，直到收到一个子进程退出的 "),s("code",[t._v("SIGCHLD")]),t._v(" 信号，之后 "),s("code",[t._v("wait()")]),t._v(" 函数会销毁子进程并返回。")]),t._v(" "),s("p",[t._v("如果成功，返回被收集的子进程的进程 "),s("code",[t._v("ID")]),t._v("；如果调用进程没有子进程，调用就会失败，此时返回 "),s("code",[t._v("-1")]),t._v("，同时 "),s("code",[t._v("errno")]),t._v(" 被置为 "),s("code",[t._v("ECHILD")]),t._v("。")]),t._v(" "),s("p",[t._v("参数 "),s("code",[t._v("status")]),t._v(" 用来保存被收集的子进程退出时的一些状态，如果对这个子进程是如何死掉的毫不在意，只想把这个子进程消灭掉，可以设置这个参数为 "),s("code",[t._v("NULL")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"waitpid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#waitpid"}},[t._v("#")]),t._v(" waitpid()")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("pid_t "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitpid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid_t pid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("作用和 "),s("code",[t._v("wait()")]),t._v(" 完全相同，但是多了两个可由用户控制的参数 "),s("code",[t._v("pid")]),t._v(" 和 "),s("code",[t._v("options")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("pid")]),t._v(" 参数指示一个子进程的 "),s("code",[t._v("ID")]),t._v("，表示只关心这个子进程退出的 "),s("code",[t._v("SIGCHLD")]),t._v(" 信号。如果 "),s("code",[t._v("pid=-1")]),t._v(" 时，那么和 "),s("code",[t._v("wait()")]),t._v(" 作用相同，都是关心所有子进程退出的 "),s("code",[t._v("SIGCHLD")]),t._v(" 信号。")]),t._v(" "),s("p",[s("code",[t._v("options")]),t._v(" 参数主要有 "),s("code",[t._v("WNOHANG")]),t._v(" 和 "),s("code",[t._v("WUNTRACED")]),t._v(" 两个选项，"),s("code",[t._v("WNOHANG")]),t._v(" 可以使 "),s("code",[t._v("waitpid()")]),t._v(" 调用变成非阻塞的，也就是说它会立即返回，父进程可以继续执行其它任务。")]),t._v(" "),s("h2",{attrs:{id:"孤儿进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#孤儿进程"}},[t._v("#")]),t._v(" 孤儿进程")]),t._v(" "),s("p",[t._v("一个父进程退出，而它的一个或多个子进程还在运行，那么这些子进程将成为孤儿进程。")]),t._v(" "),s("p",[t._v("孤儿进程将被 "),s("code",[t._v("init")]),t._v(" 进程（进程号为 1）所收养，并由 "),s("code",[t._v("init")]),t._v(" 进程对它们完成状态收集工作。")]),t._v(" "),s("p",[t._v("由于孤儿进程会被 "),s("code",[t._v("init")]),t._v(" 进程收养，所以孤儿进程不会对系统造成危害。")]),t._v(" "),s("h2",{attrs:{id:"僵尸进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#僵尸进程"}},[t._v("#")]),t._v(" 僵尸进程")]),t._v(" "),s("p",[t._v("一个子进程的进程描述符在子进程退出时不会释放，只有当父进程通过 "),s("code",[t._v("wait()")]),t._v(" 或 "),s("code",[t._v("waitpid()")]),t._v(" 获取了子进程信息后才会释放。如果子进程退出，而父进程并没有调用 "),s("code",[t._v("wait()")]),t._v(" 或 "),s("code",[t._v("waitpid()")]),t._v("，那么子进程的进程描述符仍然保存在系统中，这种进程称之为僵尸进程。")]),t._v(" "),s("p",[t._v("僵尸进程通过 "),s("code",[t._v("ps")]),t._v(" 命令显示出来的状态为 "),s("code",[t._v("Z")]),t._v("（"),s("code",[t._v("zombie")]),t._v("）。")]),t._v(" "),s("p",[t._v("系统所能使用的进程号是有限的，如果产生大量僵尸进程，将因为没有可用的进程号而导致系统不能产生新的进程。")]),t._v(" "),s("p",[t._v("要消灭系统中大量的僵尸进程，只需要将其父进程杀死，此时僵尸进程就会变成孤儿进程，从而被 "),s("code",[t._v("init")]),t._v(" 进程所收养，这样 "),s("code",[t._v("init")]),t._v(" 进程就会释放所有的僵尸进程所占有的资源，从而结束僵尸进程。")])])}),[],!1,null,null,null);a.default=e.exports}}]);