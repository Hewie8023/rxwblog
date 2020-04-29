(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{533:function(v,_,t){"use strict";t.r(_);var a=t(6),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#虚拟内存"}},[v._v("虚拟内存")])]),t("li",[t("a",{attrs:{href:"#分页系统地址映射"}},[v._v("分页系统地址映射")])]),t("li",[t("a",{attrs:{href:"#页面置换算法"}},[v._v("页面置换算法")]),t("ul",[t("li",[t("a",{attrs:{href:"#最佳"}},[v._v("最佳")])]),t("li",[t("a",{attrs:{href:"#最近最久未使用（lru）"}},[v._v("最近最久未使用（LRU）")])]),t("li",[t("a",{attrs:{href:"#先进先出"}},[v._v("先进先出")])]),t("li",[t("a",{attrs:{href:"#最近最少使用（lfu）"}},[v._v("最近最少使用（LFU）")])])])]),t("li",[t("a",{attrs:{href:"#分段"}},[v._v("分段")]),t("ul",[t("li",[t("a",{attrs:{href:"#段页式"}},[v._v("段页式")])]),t("li",[t("a",{attrs:{href:"#分页与分段的比较"}},[v._v("分页与分段的比较")])])])])])]),t("p"),v._v(" "),t("h2",{attrs:{id:"虚拟内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟内存"}},[v._v("#")]),v._v(" 虚拟内存")]),v._v(" "),t("p",[v._v("虚拟内存的目的是为了让物理内存扩充成更大的逻辑内存，从而让程序获得更多的可用内存。")]),v._v(" "),t("p",[v._v("为了更好的管理内存，操作系统将内存抽象成地址空间。每个程序拥有自己的地址空间，这个地址空间被分割成多个块，每一块称为一页。这些页被映射到物理内存，但不需要映射到连续的物理内存，也不需要所有页都必须在物理内存中。当程序引用到不在物理内存中的页时，由硬件执行必要的映射，将缺失的部分装入物理内存并重新执行失败的指令。")]),v._v(" "),t("p",[v._v("从上面的描述中可以看出，虚拟内存允许程序不用将地址空间中的每一页都映射到物理内存，也就是说一个程序不需要全部调入内存就可以运行，这使得有限的内存运行大程序成为可能。例如有一台计算机可以产生 "),t("code",[v._v("16")]),v._v(" 位地址，那么一个程序的地址空间范围是 "),t("code",[v._v("0~64K")]),v._v("。该计算机只有 "),t("code",[v._v("32KB")]),v._v(" 的物理内存，虚拟内存技术允许该计算机运行一个 "),t("code",[v._v("64K")]),v._v(" 大小的程序。")]),v._v(" "),t("h2",{attrs:{id:"分页系统地址映射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分页系统地址映射"}},[v._v("#")]),v._v(" 分页系统地址映射")]),v._v(" "),t("p",[v._v("内存管理单元（"),t("code",[v._v("MMU")]),v._v("）管理着地址空间和物理内存的转换，其中的页表（"),t("code",[v._v("Page table")]),v._v("）存储着页（程序地址空间）和页框（物理内存空间）的映射表。")]),v._v(" "),t("p",[v._v("一个虚拟地址分成两个部分，一部分存储页面号，一部分存储偏移量。")]),v._v(" "),t("p",[v._v("下图的页表存放着 "),t("code",[v._v("16")]),v._v(" 个页，这 "),t("code",[v._v("16")]),v._v(" 个页需要用 "),t("code",[v._v("4")]),v._v(" 个比特位来进行索引定位。例如对于虚拟地址（"),t("code",[v._v("0010 000000000100")]),v._v("），前 "),t("code",[v._v("4")]),v._v(" 位是存储页面号 "),t("code",[v._v("2")]),v._v("，读取表项内容为（"),t("code",[v._v("110 1")]),v._v("），页表项最后一位表示是否存在于内存中，"),t("code",[v._v("1")]),v._v(" 表示存在。后 "),t("code",[v._v("12")]),v._v(" 位存储偏移量。这个页对应的页框的地址为 （"),t("code",[v._v("110 000000000100")]),v._v("）。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s2.ax1x.com/2019/10/31/KTYG1s.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"页面置换算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面置换算法"}},[v._v("#")]),v._v(" 页面置换算法")]),v._v(" "),t("p",[v._v("在程序运行过程中，如果要访问的页面不在内存中，就发生缺页中断从而将该页调入内存中。此时如果内存已无空闲空间，系统必须从内存中调出一个页面到磁盘对换区中来腾出空间。")]),v._v(" "),t("p",[v._v("页面置换算法和缓存淘汰策略类似，可以将内存看成磁盘的缓存。在缓存系统中，缓存的大小有限，当有新的缓存到达时，需要淘汰一部分已经存在的缓存，这样才有空间存放新的缓存数据。")]),v._v(" "),t("p",[v._v("页面置换算法的主要目标是使页面置换频率最低（也可以说缺页率最低）。")]),v._v(" "),t("h3",{attrs:{id:"最佳"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最佳"}},[v._v("#")]),v._v(" 最佳")]),v._v(" "),t("p",[v._v("所选择的被换出的页面将是最长时间内不再被访问，通常可以保证获得最低的缺页率。")]),v._v(" "),t("p",[v._v("是一种理论上的算法，因为无法知道一个页面多长时间不再被访问。")]),v._v(" "),t("h3",{attrs:{id:"最近最久未使用（lru）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最近最久未使用（lru）"}},[v._v("#")]),v._v(" 最近最久未使用（LRU）")]),v._v(" "),t("p",[v._v("为了实现 "),t("code",[v._v("LRU")]),v._v("，需要在内存中维护一个所有页面的链表。当一个页面被访问时，将这个页面移到链表表头。这样就能保证链表表尾的页面是最近最久未访问的。")]),v._v(" "),t("p",[t("code",[v._v("LRU")]),v._v("算法的描述： 设计一种缓存结构，该结构在构造时确定大小，假设大小为 K，并有两个功能：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("set(key,value)")]),v._v("：将记录"),t("code",[v._v("(key,value)")]),v._v("插入该结构。当缓存满时，将最久未使用的数据置换掉。")]),v._v(" "),t("li",[t("code",[v._v("get(key)")]),v._v("：返回"),t("code",[v._v("key")]),v._v("对应的"),t("code",[v._v("value")]),v._v("值。")])]),v._v(" "),t("p",[v._v("实现：最朴素的思想就是用数组+时间戳的方式，不过这样做效率较低。因此，我们可以用双向链表（"),t("code",[v._v("LinkedList")]),v._v("）+哈希表（"),t("code",[v._v("HashMap")]),v._v("）实现（链表用来表示位置，哈希表用来存储和查找）")]),v._v(" "),t("h3",{attrs:{id:"先进先出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先进先出"}},[v._v("#")]),v._v(" 先进先出")]),v._v(" "),t("p",[v._v("选择换出的页面是最先进入的页面。")]),v._v(" "),t("p",[v._v("该算法会将那些经常被访问的页面也被换出，从而使缺页率升高。")]),v._v(" "),t("h3",{attrs:{id:"最近最少使用（lfu）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最近最少使用（lfu）"}},[v._v("#")]),v._v(" 最近最少使用（LFU）")]),v._v(" "),t("p",[v._v("如果一个数据在最近一段时间很少被访问到，那么可以认为在将来它被访问的可能性也很小。因此，当空间满时，最小频率访问的数据最先被淘汰。")]),v._v(" "),t("p",[v._v("设计一种缓存结构，该结构在构造时确定大小，假设大小为 K，并有两个功能：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("set(key,value)")]),v._v("：将记录"),t("code",[v._v("(key,value)")]),v._v("插入该结构。当缓存满时，将访问频率最低的数据置换掉。")]),v._v(" "),t("li",[t("code",[v._v("get(key)")]),v._v("：返回"),t("code",[v._v("key")]),v._v("对应的"),t("code",[v._v("value")]),v._v("值。")])]),v._v(" "),t("p",[v._v("算法实现策略：考虑到 "),t("code",[v._v("LFU")]),v._v(" 会淘汰访问频率最小的数据，我们需要一种合适的方法按大小顺序维护数据访问的频率。"),t("code",[v._v("LFU")]),v._v(" 算法本质上可以看做是一个 "),t("code",[v._v("top K")]),v._v(" 问题(K = 1)，即选出频率最小的元素，因此我们很容易想到可以用二项堆来选择频率最小的元素，这样的实现比较高效。最终实现策略为"),t("strong",[v._v("小顶堆+哈希表")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"分段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分段"}},[v._v("#")]),v._v(" 分段")]),v._v(" "),t("p",[v._v("虚拟内存采用的是分页技术，也就是将地址空间划分成固定大小的页，每一页再与内存进行映射。")]),v._v(" "),t("p",[v._v("下图为一个编译器在编译过程中建立的多个表，有 4 个表是动态增长的，如果使用分页系统的一维地址空间，动态增长的特点会导致覆盖问题的出现。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s2.ax1x.com/2019/10/31/KTYK78.png",alt:""}})]),v._v(" "),t("p",[v._v("分段的做法是把每个表分成段，一个段构成一个独立的地址空间。每个段的长度可以不同，并且可以动态增长。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://s2.ax1x.com/2019/10/31/KTYQAS.png",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"段页式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#段页式"}},[v._v("#")]),v._v(" 段页式")]),v._v(" "),t("p",[v._v("程序的地址空间划分成多个拥有独立地址空间的段，每个段上的地址空间划分成大小相同的页。这样既拥有分段系统的共享和保护，又拥有分页系统的虚拟内存功能。")]),v._v(" "),t("h3",{attrs:{id:"分页与分段的比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分页与分段的比较"}},[v._v("#")]),v._v(" 分页与分段的比较")]),v._v(" "),t("p",[v._v("对程序员的透明性：分页透明，但是分段需要程序员显式划分每个段。")]),v._v(" "),t("p",[v._v("地址空间的维度：分页是一维地址空间，分段是二维的。")]),v._v(" "),t("p",[v._v("大小是否可以改变：页的大小不可变，段的大小可以动态改变。")]),v._v(" "),t("p",[v._v("出现的原因：分页主要用于实现虚拟内存，从而获得更大的地址空间；分段主要是为了使程序和数据可以被划分为逻辑上独立的地址空间并且有助于共享和保护。")])])}),[],!1,null,null,null);_.default=e.exports}}]);