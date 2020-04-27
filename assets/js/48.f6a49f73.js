(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{499:function(v,_,e){"use strict";e.r(_);var t=e(4),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#索引"}},[v._v("索引")]),e("ul",[e("li",[e("a",{attrs:{href:"#b-树原理"}},[v._v("B+树原理")])]),e("li",[e("a",{attrs:{href:"#mysql索引"}},[v._v("MySQL索引")])]),e("li",[e("a",{attrs:{href:"#聚集索引和非聚集索引"}},[v._v("聚集索引和非聚集索引")])])])]),e("li",[e("a",{attrs:{href:"#存储引擎"}},[v._v("存储引擎")])]),e("li",[e("a",{attrs:{href:"#切分"}},[v._v("切分")]),e("ul",[e("li",[e("a",{attrs:{href:"#水平切分"}},[v._v("水平切分")])]),e("li",[e("a",{attrs:{href:"#垂直切分"}},[v._v("垂直切分")])])])]),e("li",[e("a",{attrs:{href:"#复制"}},[v._v("复制")]),e("ul",[e("li",[e("a",{attrs:{href:"#主从复制"}},[v._v("主从复制")])]),e("li",[e("a",{attrs:{href:"#读写分离"}},[v._v("读写分离")])])])])])]),e("p"),v._v(" "),e("h2",{attrs:{id:"索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[v._v("#")]),v._v(" 索引")]),v._v(" "),e("h3",{attrs:{id:"b-树原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-树原理"}},[v._v("#")]),v._v(" B+树原理")]),v._v(" "),e("p",[e("strong",[v._v("数据结构")])]),v._v(" "),e("p",[e("code",[v._v("B Tree")]),v._v(" 指的是 "),e("code",[v._v("Balance Tree")]),v._v("，也就是平衡树。平衡树是一颗查找树，并且所有叶子节点位于同一层。")]),v._v(" "),e("p",[e("code",[v._v("B+ Tree")]),v._v(" 是基于 "),e("code",[v._v("B Tree")]),v._v(" 和叶子节点顺序访问指针进行实现，它具有 "),e("code",[v._v("B Tree")]),v._v(" 的平衡性，并且通过顺序访问指针来提高区间查询的性能。")]),v._v(" "),e("p",[v._v("在 "),e("code",[v._v("B+ Tree")]),v._v(" 中，一个节点中的 "),e("code",[v._v("key")]),v._v(" 从左到右非递减排列\n"),e("img",{attrs:{src:"https://s2.ax1x.com/2019/10/30/K5maDI.png",alt:""}})]),v._v(" "),e("p",[e("strong",[v._v("操作")])]),v._v(" "),e("p",[v._v("进行查找操作时，首先在根节点进行二分查找，找到一个 "),e("code",[v._v("key")]),v._v(" 所在的指针，然后递归地在指针所指向的节点进行查找。直到查找到叶子节点，然后在叶子节点上进行二分查找，找出 "),e("code",[v._v("key")]),v._v(" 所对应的 "),e("code",[v._v("data")]),v._v("。")]),v._v(" "),e("p",[v._v("插入删除操作会破坏平衡树的平衡性，因此在插入删除操作之后，需要对树进行一个分裂、合并、旋转等操作来维护平衡性。")]),v._v(" "),e("p",[e("strong",[v._v("与红黑树的比较")])]),v._v(" "),e("p",[v._v("红黑树等平衡树也可以用来实现索引，但是文件系统及数据库系统普遍采用 "),e("code",[v._v("B+ Tree")]),v._v(" 作为索引结构，主要有以下两个原因：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("更少的查找次数")]),v._v(" "),e("p",[v._v("平衡树查找操作的时间复杂度和树高 "),e("code",[v._v("h")]),v._v(" 相关，"),e("code",[v._v("O(h)=O(logdN)")]),v._v("，其中 "),e("code",[v._v("d")]),v._v(" 为每个节点的出度。")]),v._v(" "),e("p",[v._v("红黑树的出度为 "),e("code",[v._v("2")]),v._v("，而 "),e("code",[v._v("B+ Tree")]),v._v(" 的出度一般都非常大，所以红黑树的树高 "),e("code",[v._v("h")]),v._v(" 很明显比 "),e("code",[v._v("B+ Tree")]),v._v(" 大非常多，查找的次数也就更多。")])]),v._v(" "),e("li",[e("p",[v._v("利用磁盘预读特性")]),v._v(" "),e("p",[v._v("为了减少磁盘 "),e("code",[v._v("I/O")]),v._v(" 操作，磁盘往往不是严格按需读取，而是每次都会预读。预读过程中，磁盘进行顺序读取，顺序读取不需要进行磁盘寻道，并且只需要很短的磁盘旋转时间，速度会非常快。")]),v._v(" "),e("p",[v._v("操作系统一般将内存和磁盘分割成固定大小的块，每一块称为一页，内存与磁盘以页为单位交换数据。数据库系统将索引的一个节点的大小设置为页的大小，使得一次 "),e("code",[v._v("I/O")]),v._v(" 就能完全载入一个节点。并且可以利用预读特性，相邻的节点也能够被预先载入。")])])]),v._v(" "),e("p",[e("strong",[v._v("与B树的比较")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("B+ Tree")]),v._v("的磁盘读写代价更低："),e("code",[v._v("B+ Tree")]),v._v("的内部节点并没有指向关键字具体信息的指针，因此其内部节点相对"),e("code",[v._v("B Tree")]),v._v("更小，如果把所有同一内部节点的关键字存放在同一盘块中，那么盘块所能容纳的关键字数量也越多，一次性读入内存的需要查找的关键字也就越多，相对IO读写次数就降低了。")]),v._v(" "),e("li",[e("code",[v._v("B+ Tree")]),v._v("的查询效率更加稳定：由于非终结点并不是最终指向文件内容的结点，而只是叶子结点中关键字的索引。所以任何关键字的查找必须走一条从根结点到叶子结点的路。所有关键字查询的路径长度相同，导致每一个数据的查询效率相当。")]),v._v(" "),e("li",[v._v("由于"),e("code",[v._v("B+ Tree")]),v._v("的数据都存储在叶子结点中，分支结点均为索引，方便扫库，只需要扫一遍叶子结点即可，但是B树因为其分支结点同样存储着数据，我们要找到具体的数据，需要进行一次中序遍历按序来扫，所以"),e("code",[v._v("B+ Tree")]),v._v("更加适合在区间查询的情况，所以通常"),e("code",[v._v("B+ Tree")]),v._v("用于数据库索引。")])]),v._v(" "),e("h3",{attrs:{id:"mysql索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql索引"}},[v._v("#")]),v._v(" MySQL索引")]),v._v(" "),e("p",[v._v("索引是在存储引擎层实现的，而不是在服务器层实现的，所以不同存储引擎具有不同的索引类型和实现。")]),v._v(" "),e("h4",{attrs:{id:"b-tree索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-tree索引"}},[v._v("#")]),v._v(" B+Tree索引")]),v._v(" "),e("p",[v._v("是大多数 "),e("code",[v._v("MySQL")]),v._v(" 存储引擎的默认索引类型。")]),v._v(" "),e("p",[v._v("因为不再需要进行全表扫描，只需要对树进行搜索即可，所以查找速度快很多。")]),v._v(" "),e("p",[v._v("因为 "),e("code",[v._v("B+ Tree")]),v._v(" 的有序性，所以除了用于查找，还可以用于排序和分组。")]),v._v(" "),e("p",[v._v("可以指定多个列作为索引列，多个索引列共同组成键。")]),v._v(" "),e("p",[v._v("适用于全键值、键值范围和键前缀查找，其中键前缀查找只适用于最左前缀查找。如果不是按照索引列的顺序进行查找，则无法使用索引。")]),v._v(" "),e("p",[e("code",[v._v("InnoDB")]),v._v(" 的 "),e("code",[v._v("B+Tree")]),v._v(" 索引分为主索引和辅助索引。主索引的叶子节点 "),e("code",[v._v("data")]),v._v(" 域记录着完整的数据记录，这种索引方式被称为聚簇索引。因为无法把数据行存放在两个不同的地方，所以一个表只能有一个聚簇索引。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s2.ax1x.com/2019/10/30/K5mUKA.png",alt:""}})]),v._v(" "),e("p",[v._v("辅助索引的叶子节点的 "),e("code",[v._v("data")]),v._v(" 域记录着主键的值，因此在使用辅助索引进行查找时，需要先查找到主键值，然后再到主索引中进行查找。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s2.ax1x.com/2019/10/30/K5mtvd.png",alt:""}})]),v._v(" "),e("h4",{attrs:{id:"哈希索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哈希索引"}},[v._v("#")]),v._v(" 哈希索引")]),v._v(" "),e("p",[v._v("哈希索引能以 "),e("code",[v._v("O(1)")]),v._v(" 时间进行查找，但是失去了有序性：")]),v._v(" "),e("ul",[e("li",[v._v("无法用于排序与分组；")]),v._v(" "),e("li",[v._v("只支持精确查找，无法用于部分查找和范围查找。")])]),v._v(" "),e("p",[e("code",[v._v("InnoDB")]),v._v(" 存储引擎有一个特殊的功能叫“自适应哈希索引”，当某个索引值被使用的非常频繁时，会在 "),e("code",[v._v("B+Tree")]),v._v(" 索引之上再创建一个哈希索引，这样就让 "),e("code",[v._v("B+Tree")]),v._v(" 索引具有哈希索引的一些优点，比如快速的哈希查找。")]),v._v(" "),e("h4",{attrs:{id:"全文索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全文索引"}},[v._v("#")]),v._v(" 全文索引")]),v._v(" "),e("p",[e("code",[v._v("MyISAM")]),v._v(" 存储引擎支持全文索引，用于查找文本中的关键词，而不是直接比较是否相等。")]),v._v(" "),e("p",[v._v("查找条件使用 "),e("code",[v._v("MATCH AGAINST")]),v._v("，而不是普通的 "),e("code",[v._v("WHERE")]),v._v("。")]),v._v(" "),e("p",[v._v("全文索引使用倒排索引实现，它记录着关键词到其所在文档的映射。")]),v._v(" "),e("p",[e("code",[v._v("InnoDB")]),v._v(" 存储引擎在 "),e("code",[v._v("MySQL 5.6.4")]),v._v(" 版本中也开始支持全文索引。")]),v._v(" "),e("h4",{attrs:{id:"空间数据索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#空间数据索引"}},[v._v("#")]),v._v(" 空间数据索引")]),v._v(" "),e("p",[e("code",[v._v("MyISAM")]),v._v(" 存储引擎支持空间数据索引（"),e("code",[v._v("R-Tree")]),v._v("），可以用于地理数据存储。空间数据索引会从所有维度来索引数据，可以有效地使用任意维度来进行组合查询。")]),v._v(" "),e("p",[v._v("必须使用 "),e("code",[v._v("GIS")]),v._v(" 相关的函数来维护数据。")]),v._v(" "),e("h3",{attrs:{id:"聚集索引和非聚集索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚集索引和非聚集索引"}},[v._v("#")]),v._v(" 聚集索引和非聚集索引")]),v._v(" "),e("p",[v._v("聚集索引和非聚集索引的根本区别是表记录的"),e("strong",[v._v("排列顺序和与索引的排列顺序是否一致")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("聚集索引")])]),v._v(" "),e("p",[v._v("聚集索引表记录的排列顺序和索引的排列顺序一致，所以查询效率快，只要找到第一个索引值记录，其余就连续性的记录在物理也一样连续存放。聚集索引对应的缺点就是修改慢，因为为了保证表中记录的物理和索引顺序一致，在记录插入的时候，会对数据页重新排序。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("非聚集索引")])]),v._v(" "),e("p",[v._v("非聚集索引制定了表中记录的逻辑顺序，但是记录的物理和索引不一定一致，两种索引都采用B+树结构，非聚集索引的叶子层并不和实际数据页相重叠，而采用叶子层包含一个指向表中的记录在数据页中的指针方式。非聚集索引层次多，不会造成数据重排。")])])]),v._v(" "),e("p",[e("strong",[v._v("例子对比两种索引")])]),v._v(" "),e("p",[v._v("聚集索引就类似新华字典中的拼音排序索引，都是按顺序进行，例如找到字典中的“爱”，就里面顺序执行找到“癌”。而非聚集索引则类似于笔画排序，索引顺序和物理顺序并不是按顺序存放的")]),v._v(" "),e("h2",{attrs:{id:"存储引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[v._v("#")]),v._v(" 存储引擎")]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("InnoDB")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("是 "),e("code",[v._v("MySQL")]),v._v(" 默认的事务型存储引擎，只有在需要它不支持的特性时，才考虑使用其它存储引擎。")])]),v._v(" "),e("li",[e("p",[v._v("实现了四个标准的隔离级别，默认级别是可重复读（"),e("code",[v._v("REPEATABLE READ")]),v._v("）。在可重复读隔离级别下，通过多版本并发控制"),e("code",[v._v("（MVCC）+ Next-Key Locking")]),v._v(" 防止幻影读。")])]),v._v(" "),e("li",[e("p",[v._v("主索引是聚簇索引，在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。")])]),v._v(" "),e("li",[e("p",[v._v("内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。")])]),v._v(" "),e("li",[e("p",[v._v("支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。")])])])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("MyISAM")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用它。")])]),v._v(" "),e("li",[e("p",[v._v("提供了大量的特性，包括压缩表、空间数据索引等。")])]),v._v(" "),e("li",[e("p",[v._v("不支持事务。")])]),v._v(" "),e("li",[e("p",[v._v("不支持行级锁，只能对整张表加锁，读取时会对需要读到的所有表加共享锁，写入时则对表加排它锁。但在表有读取操作的同时，也可以往表中插入新的记录，这被称为并发插入（"),e("code",[v._v("CONCURRENT INSERT")]),v._v("）。")])]),v._v(" "),e("li",[e("p",[v._v("可以手工或者自动执行检查和修复操作，但是和事务恢复以及崩溃恢复不同，可能导致一些数据丢失，而且修复操作是非常慢的。")])]),v._v(" "),e("li",[e("p",[v._v("如果指定了 "),e("code",[v._v("DELAY_KEY_WRITE")]),v._v(" 选项，在每次修改执行完成时，不会立即将修改的索引数据写入磁盘，而是会写到内存中的键缓冲区，只有在清理键缓冲区或者关闭表的时候才会将对应的索引块写入磁盘。这种方式可以极大的提升写入性能，但是在数据库或者主机崩溃时会造成索引损坏，需要执行修复操作。")])])])])]),v._v(" "),e("p",[e("strong",[v._v("比较")])]),v._v(" "),e("ul",[e("li",[v._v("事务："),e("code",[v._v("InnoDB")]),v._v(" 是事务型的，可以使用 "),e("code",[v._v("Commit")]),v._v(" 和 "),e("code",[v._v("Rollback")]),v._v(" 语句。")]),v._v(" "),e("li",[v._v("并发："),e("code",[v._v("MyISAM")]),v._v(" 只支持表级锁，而 "),e("code",[v._v("InnoDB")]),v._v(" 还支持行级锁。")]),v._v(" "),e("li",[v._v("外键："),e("code",[v._v("InnoDB")]),v._v(" 支持外键。")]),v._v(" "),e("li",[v._v("备份："),e("code",[v._v("InnoDB")]),v._v(" 支持在线热备份。")]),v._v(" "),e("li",[v._v("崩溃恢复："),e("code",[v._v("MyISAM")]),v._v(" 崩溃后发生损坏的概率比 "),e("code",[v._v("InnoDB")]),v._v(" 高很多，而且恢复的速度也更慢。")]),v._v(" "),e("li",[v._v("其它特性："),e("code",[v._v("MyISAM")]),v._v(" 支持压缩表和空间数据索引。")])]),v._v(" "),e("h2",{attrs:{id:"切分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切分"}},[v._v("#")]),v._v(" 切分")]),v._v(" "),e("h3",{attrs:{id:"水平切分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#水平切分"}},[v._v("#")]),v._v(" 水平切分")]),v._v(" "),e("p",[v._v("水平切分又称为 "),e("code",[v._v("Sharding")]),v._v("，它是将同一个表中的记录拆分到多个结构相同的表中。")]),v._v(" "),e("p",[v._v("当一个表的数据不断增多时，"),e("code",[v._v("Sharding")]),v._v(" 是必然的选择，它可以将数据分布到集群的不同节点上，从而缓存单个数据库的压力。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s2.ax1x.com/2019/09/03/nkYDBj.jpg",alt:""}})]),v._v(" "),e("h3",{attrs:{id:"垂直切分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垂直切分"}},[v._v("#")]),v._v(" 垂直切分")]),v._v(" "),e("p",[v._v("垂直切分是将一张表按列切分成多个表，通常是按照列的关系密集程度进行切分，也可以利用垂直切分将经常被使用的列和不经常被使用的列切分到不同的表中。")]),v._v(" "),e("p",[v._v("在数据库的层面使用垂直切分将按数据库中表的密集程度部署到不同的库中，例如将原来的电商数据库垂直切分成商品数据库、用户数据库等。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s2.ax1x.com/2019/09/03/nkYwjg.jpg",alt:""}})]),v._v(" "),e("h2",{attrs:{id:"复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[v._v("#")]),v._v(" 复制")]),v._v(" "),e("h3",{attrs:{id:"主从复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[v._v("#")]),v._v(" 主从复制")]),v._v(" "),e("p",[v._v("主要涉及三个线程："),e("code",[v._v("binlog")]),v._v(" 线程、"),e("code",[v._v("I/O")]),v._v(" 线程和 "),e("code",[v._v("SQL")]),v._v(" 线程。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("binlog")]),v._v(" 线程 ：负责将主服务器上的数据更改写入二进制日志（"),e("code",[v._v("Binary log")]),v._v("）中。")]),v._v(" "),e("li",[e("code",[v._v("I/O")]),v._v(" 线程 ：负责从主服务器上读取二进制日志，并写入从服务器的中继日志（"),e("code",[v._v("Relay log")]),v._v("）。")]),v._v(" "),e("li",[e("code",[v._v("SQL")]),v._v(" 线程 ：负责读取中继日志，解析出主服务器已经执行的数据更改并在从服务器中重放（"),e("code",[v._v("Replay")]),v._v("）。")])]),v._v(" "),e("h3",{attrs:{id:"读写分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[v._v("#")]),v._v(" 读写分离")]),v._v(" "),e("p",[v._v("主服务器处理写操作以及实时性要求比较高的读操作，而从服务器处理读操作。")]),v._v(" "),e("p",[v._v("读写分离能提高性能的原因在于：")]),v._v(" "),e("ul",[e("li",[v._v("主从服务器负责各自的读和写，极大程度缓解了锁的争用；")]),v._v(" "),e("li",[v._v("从服务器可以使用 MyISAM，提升查询性能以及节约系统开销；")]),v._v(" "),e("li",[v._v("增加冗余，提高可用性。")])]),v._v(" "),e("p",[v._v("读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s2.ax1x.com/2019/09/03/nkY6Nq.png",alt:""}})])])}),[],!1,null,null,null);_.default=a.exports}}]);