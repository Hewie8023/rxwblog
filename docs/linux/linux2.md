---
title: 文件
date: 2019-09-13 10:00:00
categories:
 - 基础知识
 - Linux
tags:
 - Linux文件
---
[[toc]]

## 文件属性
用户分为三种：文件拥有者、群组以及其它人，对不同的用户有不同的文件权限。

使用 `ls` 查看一个文件时，会显示一个文件的信息，例如 `drwxr-xr-x 3 root root 17 May 6 00:14 .config`，对这个信息的解释如下：
- drwxr-xr-x：文件类型以及权限，第 1 位为文件类型字段，后 9 位为文件权限字段
- 3：链接数
- root：文件拥有者
- root：所属群组
- 17：文件大小
- May 6 00:14：文件最后被修改的时间
- .config：文件名

常见的文件类型及其含义有：
- d：目录
- -：文件
- l：链接文件

9 位的文件权限字段中，每 3 个为一组，共 3 组，每一组分别代表对文件拥有者、所属群组以及其它人的文件权限。一组权限中的 3 位分别为 r、w、x 权限，表示可读、可写、可执行。

文件时间有以下三种：
- modification time (mtime)：文件的内容更新就会更新；
- status time (ctime)：文件的状态（权限、属性）更新就会更新；
- access time (atime)：读取文件时就会更新。

## 文件与目录的基本操作
### ls
列出文件或者目录的信息，目录的信息就是其中包含的文件。
```cpp
# ls [-aAdfFhilnrRSt] file|dir
-a ：列出全部的文件
-d ：仅列出目录本身
-l ：以长数据串行列出，包含文件的属性与权限等等数据
```

### cd
更换当前目录
```cpp
cd [相对路径或绝对路径]
```

### mkdir
创建目录。
```cpp
# mkdir [-mp] 目录名称
-m ：配置目录权限
-p ：递归创建目录
```

### rmdil
删除目录，目录必须为空。
```cpp
rmdir [-p] 目录名称
-p ：递归删除目录
```

### touch
更新文件时间或者建立新文件。
```cpp
# touch [-acdmt] filename
-a ： 更新 atime
-c ： 更新 ctime，若该文件不存在则不建立新文件
-m ： 更新 mtime
-d ： 后面可以接更新日期而不使用当前日期，也可以使用 --date="日期或时间"
-t ： 后面可以接更新时间而不使用当前时间，格式为[YYYYMMDDhhmm]
```

### cp
复制文件。如果源文件有两个以上，则目的文件一定要是目录才行。
```cpp
cp [-adfilprsu] source destination
-a ：相当于 -dr --preserve=all
-d ：若来源文件为链接文件，则复制链接文件属性而非文件本身
-i ：若目标文件已经存在时，在覆盖前会先询问
-p ：连同文件的属性一起复制过去
-r ：递归复制
-u ：destination 比 source 旧才更新 destination，或 destination 不存在的情况下才复制
--preserve=all ：除了 -p 的权限相关参数外，还加入 SELinux 的属性, links, xattr 等也复制了
```

### rm
删除文件。
```cpp
# rm [-fir] 文件或目录
-r ：递归删除
```

### mv
移动文件。
```cpp
# mv [-fiu] source destination
# mv [options] source1 source2 source3 .... directory
-f ： force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖
```

## 修改权限
可以将一组权限用数字来表示，此时一组权限的 3 个位当做二进制数字的位，从左到右每个位的权值为 4、2、1，即每个权限对应的数字权值为 r : 4、w : 2、x : 1。
```cpp
# chmod [-R] xyz dirname/filename
```
示例：将 `.bashrc` 文件的权限修改为 `-rwxr-xr--`。
```cpp
# chmod 754 .bashrc
```
也可以使用符号来设定权限。
```cpp
# chmod [ugoa]  [+-=] [rwx] dirname/filename
- u：拥有者
- g：所属群组
- o：其他人
- a：所有人
- +：添加权限
- -：移除权限
- =：设定权限
```
示例：为 `.bashrc` 文件的所有用户添加写权限。
```cpp
# chmod a+w .bashrc
```

## 默认权限
+ **文件默认权限**

    文件默认没有可执行权限，因此为 `666`，也就是 `-rw-rw-rw-` 。
+ **目录默认权限**
    
    目录必须要能够进入，也就是必须拥有可执行权限，因此为 `777` ，也就是 `drwxrwxrwx`。

可以通过 `umask` 设置或者查看默认权限，通常以掩码的形式来表示，例如 `002` 表示其它用户的权限去除了一个 `2` 的权限，也就是写权限，因此建立新文件时默认的权限为 `-rw-rw-r--`。

## 目录的权限
文件名不是存储在一个文件的内容中，而是存储在一个文件所在的目录中。因此，拥有文件的 `w` 权限并不能对文件名进行修改。

目录存储文件列表，一个目录的权限也就是对其文件列表的权限。因此，目录的 `r` 权限表示可以读取文件列表；`w` 权限表示可以修改文件列表，具体来说，就是添加删除文件，对文件名进行修改；`x` 权限可以让该目录成为工作目录，`x` 权限是 `r` 和 `w` 权限的基础，如果不能使一个目录成为工作目录，也就没办法读取文件列表以及对文件列表进行修改了。

## 链接
![](https://s2.ax1x.com/2019/10/31/KTYBh4.png)
```cpp
# ln [-sf] source_filename dist_filename
-s ：默认是实体链接，加 -s 为符号链接
-f ：如果目标文件存在时，先删除目标文件
```

### 实体链接
在目录下创建一个条目，记录着文件名与 `inode` 编号，这个 `inode` 就是源文件的 `inode`。

删除任意一个条目，文件还是存在，只要引用数量不为 0。

有以下限制：不能跨越文件系统、不能对目录进行链接。
```cpp
# ln /etc/crontab .
# ll -i /etc/crontab crontab
34474855 -rw-r--r--. 2 root root 451 Jun 10 2014 crontab
34474855 -rw-r--r--. 2 root root 451 Jun 10 2014 /etc/crontab
```

### 符号链接
符号链接文件保存着源文件所在的绝对路径，在读取时会定位到源文件上，可以理解为 `Windows` 的快捷方式。

当源文件被删除了，链接文件就打不开了。

因为记录的是路径，所以可以为目录建立符号链接。
```cpp
# ll -i /etc/crontab /root/crontab2
34474855 -rw-r--r--. 2 root root 451 Jun 10 2014 /etc/crontab
53745909 lrwxrwxrwx. 1 root root 12 Jun 23 22:31 /root/crontab2 -> /etc/crontab
```

##  获取文件内容
### cat
取得文件内容。
```cpp
# cat [-AbEnTv] filename
-n ：打印出行号，连同空白行也会有行号，-b 不会
```

### tac
是 `cat` 的反向操作，从最后一行开始打印。

### more
和 `cat` 不同的是它可以一页一页查看文件内容，比较适合大文件的查看。

### less
和 `more` 类似，但是多了一个向前翻页的功能。

### head
取得文件前几行。
```cpp
# head [-n number] filename
-n ：后面接数字，代表显示几行的意思
```

### tail
是 `head` 的反向操作，只是取得是后几行。

### od
以字符或者十六进制的形式显示二进制文件。

## 指令与文件搜索
### which
指令搜索。
```cpp
# which [-a] command
-a ：将所有指令列出，而不是只列第一个
```

### whereis
文件搜索。速度比较快，因为它只搜索几个特定的目录。
```cpp
# whereis [-bmsu] dirname/filename
```

### locate
文件搜索。可以用关键字或者正则表达式进行搜索。

`locate` 使用 `/var/lib/mlocate/` 这个数据库来进行搜索，它存储在内存中，并且每天更新一次，所以无法用 `locate` 搜索新建的文件。可以使用 `updatedb` 来立即更新数据库。
```cpp
# locate [-ir] keyword
-r：正则表达式
```

### find
文件搜索。可以使用文件的属性和权限进行搜索。
```cpp
# find [basedir] [option]
example: find . -name "shadow*"
```

#### 与时间有关的选项
```cpp
-mtime  n ：列出在 n 天前的那一天修改过内容的文件
-mtime +n ：列出在 n 天之前 (不含 n 天本身) 修改过内容的文件
-mtime -n ：列出在 n 天之内 (含 n 天本身) 修改过内容的文件
-newer file ： 列出比 file 更新的文件
```

#### 与文件拥有者和所属群组有关的选项
```cpp
-uid n
-gid n
-user name
-group name
-nouser ：搜索拥有者不存在 /etc/passwd 的文件
-nogroup：搜索所属群组不存在于 /etc/group 的文件
```
#### 与文件权限和名称有关的选项
```cpp
-name filename
-size [+-]SIZE：搜寻比 SIZE 还要大 (+) 或小 (-) 的文件。这个 SIZE 的规格有：c: 代表 byte，k: 代表 1024bytes。所以，要找比 50KB 还要大的文件，就是 -size +50k
-type TYPE
-perm mode  ：搜索权限等于 mode 的文件
-perm -mode ：搜索权限包含 mode 的文件
-perm /mode ：搜索权限包含任一 mode 的文件
```