---
title: 应用层
date: 2019-09-13 13:00:00
categories:
 - 基础知识
 - 计算机网络
tags:
 - DNS
 - FTP
 - HTTP
 - HTTPS
---
# 五、应用层

## 1、域名系统
DNS 是一个分布式数据库，提供了主机名和 IP 地址之间相互转换的服务。这里的分布式数据库是指，每个站点只保留它自己的那部分数据。

域名具有层次结构，从上到下依次为：根域名、顶级域名、二级域名。

DNS 可以使用 UDP 或者 TCP 进行传输，使用的端口号都为 53。大多数情况下 DNS 使用 UDP 进行传输，这就要求域名解析器和域名服务器都必须自己处理超时和重传从而保证可靠性。在两种情况下会使用 TCP 进行传输：
- 如果返回的响应超过的 512 字节（UDP 最大只支持 512 字节的数据）。
- 区域传送（区域传送是主域名服务器向辅助域名服务器传送变化的那部分数据）。

### 1.1递归查询和迭代查询
**递归查询**：本机向本地域名服务器发出一次查询请求，就静待最终的结果。如果本地域名服务器无法解析，自己会以DNS客户机的身份向其它域名服务器查询，直到得到最终的IP地址告诉本机 
**迭代查询**：本地域名服务器向根域名服务器查询，根域名服务器告诉它下一步到哪里去查询，然后它再去查，每次它都是以客户机的身份去各个服务器查询。
![](https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/计算机网络/递归查询迭代查询.png)

### 1.2域名解析过程
域名解析总体可分为一下过程： 

(1) 输入域名后,先查找自己主机对应的域名服务器，域名服务器先查找自己的数据库中的数据. 

(2) 如果没有，就向上级域名服务器进行查找，依次类推 

(3) 最多回溯到根域名服务器, 肯定能找到这个域名的IP地址 

(4) 域名服务器自身也会进行一些缓存，把曾经访问过的域名和对应的IP地址缓存起来, 可以加速查找过程 

具体可描述如下： 
1. 主机先向本地域名服务器进行递归查询 
2. 本地域名服务器采用迭代查询，向一个根域名服务器进行查询 
3. 根域名服务器告诉本地域名服务器，下一次应该查询的顶级域名服务器的IP地址 
4. 本地域名服务器向顶级域名服务器进行查询 
5. 顶级域名服务器告诉本地域名服务器，下一步查询权限服务器的IP地址 
6. 本地域名服务器向权限服务器进行查询 
7. 权限服务器告诉本地域名服务器所查询的主机的IP地址 
8. 本地域名服务器最后把查询结果告诉主机 

### 1.3DNS缓存
为了增加访问效率，计算机有域名缓存机制，当访问过某个网站并得到其IP后，会将其域名和IP缓存下来，下一次访问的时候，就不需要再请求域名服务器获取IP，直接使用缓存中的IP，提高了响应的速度。当然缓存是有有效时间的，当过了有效时间后，再次请求网站，还是需要先请求域名解析。

但是域名缓存机制也可能会带来麻烦。例如IP已变化了，仍然使用缓存中的IP来访问，将会访问失败。再如 同一个域名在内网和外网访问时所对应的IP是不同的，如在外网访问时通过外网IP映射到内网的IP。同一台电脑在外网环境下访问了此域名，再换到内网来访问此域名，在DNS缓存的作用下，也会去访问外网的IP，导致访问失败。根据情况，可以手动清除DNS缓存或者禁止DNS缓存机制。


## 2、文件传输协议（FTP）
FTP 使用 TCP 进行连接，它需要两个连接来传送一个文件：
- 控制连接：服务器打开端口号 21 等待客户端的连接，客户端主动建立连接后，使用这个连接将客户端的命令传送给服务器，并传回服务器的应答。
- 数据连接：用来传送一个文件数据。

为什么要用这两个连接？
FTP协议约定，一个连接用于传输命令，一个连接用于传输数据。

根据数据连接是否是服务器端主动建立，FTP 有主动和被动两种模式：
**主动模式(PORT)**
服务器端主动建立数据连接，其中服务器端的端口号为 20，客户端的端口号随机，但是必须大于 1024，因为 0~1023 是熟知端口号。

**被动模式(PASV)**
客户端主动建立数据连接，其中客户端的端口号由客户端自己指定，服务器端的端口号随机。

主动模式要求客户端开放端口号给服务器端，需要去配置客户端的防火墙。被动模式只需要服务器端开放端口号即可，无需客户端配置防火墙。但是被动模式会导致服务器端的安全性减弱，因为开放了过多的端口号。

### 2.1FTP响应码
客户端发送 FTP 命令后，服务器返回响应码。

响应码用三位数字编码表示：

第一个数字给出了命令状态的一般性指示，比如响应成功、失败或不完整。

第二个数字是响应类型的分类，如 2 代表跟连接有关的响应，3 代表用户认证。

第三个数字提供了更加详细的信息。

第一个数字的含义如下：

数字 | 含义
-|-
1 | 表示服务器正确接收信息，还未处理。
2 | 表示服务器已经正确处理信息。
3 | 表示服务器正确接收信息，正在处理。
4 | 表示信息暂时错误。
5 | 表示信息永久错误。

第二个数字的含义如下：
数字 | 含义
-|-
0 | 表示语法。
1 | 表示系统状态和信息。
2 | 表示连接状态。
3 | 表示与用户认证有关的信息。
4 | 表示未定义。
5 | 表示与文件系统有关的信息。

### 2.2FTP断点续传
断点续传功能其实就是在发送的过程中，记录下发送的进度，当出现包括网络中断等发送出错的情况下，断开连接。等下次网络好的情况下，继续发送剩余文件的过程。 

对于ftp的断点续传上传的功能实现，FTP协议中提供了一条APPE的控制命令用来追加文件，我们所实现的断点续传的命令就是围绕着这个命令进行的。 
1. 在正常上传的过程中，记录下已经发送的文件的长度 
2. 当网络发送异常时，记录当前发送文件长度，并关闭当前ftp连接，结束ftp的发送过程 
3. 当网络正常后，重新开始建立ftp的连接，此时由上传文件改为APPE命令，并在数据连接上发送剩余的数据到ftp服务器。

### 2.3匿名FTP
匿名FTP是这样一种机制，用户可通过它连接到远程FTP服务器上，进行文件的上传或下载，而不需要成为其注册用户。系统管理员建立一个特殊的用户帐号(匿名帐号)，一般名为anonymous或助，互联网上的任何人在任何地方都可使用该用户的帐号。

通过FTP程序连接匿名FTP服务器的方式同连接普通FTP服务器的方式类似，只是在要求提供用户帐号时必须输人anonymous或ftp，而该用户帐号的口令可以是任意的字符。

当远程服务器提供匿名FTP服务时，会预先指定某些目录及文件向公众开放，允许匿名用户的存取，而系统中的其余目录则处于隐匿状态。作为一种安全措施，大多数匿名FTP服务器都只允许用户下载文件，而不允许用户上传文件。

## 3、动态主机配置协议
DHCP (Dynamic Host Configuration Protocol) 提供了即插即用的连网方式，用户不再需要手动配置 IP 地址等信息。

DHCP 配置的内容不仅是 IP 地址，还包括子网掩码、网关 IP 地址。

DHCP 工作过程如下：
1. 客户端发送 Discover 报文，该报文的目的地址为 255.255.255.255:67，源地址为 0.0.0.0:68，被放入 UDP 中，该报文被广播到同一个子网的所有主机上。如果客户端和 DHCP 服务器不在同一个子网，就需要使用中继代理。
2. DHCP 服务器收到 Discover 报文之后，发送 Offer 报文给客户端，该报文包含了客户端所需要的信息。因为客户端可能收到多个 DHCP 服务器提供的信息，因此客户端需要进行选择。
3. 如果客户端选择了某个 DHCP 服务器提供的信息，那么就发送 Request 报文给该 DHCP 服务器。
4. DHCP 服务器发送 Ack 报文，表示客户端此时可以使用提供给它的信息。

![](https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/计算机网络/DHCP.jpg)

## 4、远程登录协议
TELNET 用于登录到远程主机上，并且远程主机上的输出也会返回。

TELNET 可以适应许多计算机和操作系统的差异，例如不同操作系统系统的换行符定义。

## 5、电子邮件协议
一个电子邮件系统由三部分组成：用户代理、邮件服务器以及邮件协议。

邮件协议包含发送协议和读取协议，发送协议常用 SMTP，读取协议常用 POP3 和 IMAP。
![](https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/计算机网络/电子邮件协议.png)

### 5.1SMTP
SMTP 只能发送 ASCII 码，而互联网邮件扩充 MIME 可以发送二进制文件。MIME 并没有改动或者取代 SMTP，而是增加邮件主体的结构，定义了非 ASCII 码的编码规则。
![](https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/计算机网络/SMTP.png)

### 5.2POP3
POP3 的特点是只要用户从服务器上读取了邮件，就把该邮件删除。但最新版本的 POP3 可以不删除邮件。

### 5.3IMAP
IMAP 协议中客户端和服务器上的邮件保持同步，如果不手动删除邮件，那么服务器上的邮件也不会被删除。IMAP 这种做法可以让用户随时随地去访问服务器上的邮件。

## 6、HTTP
HTTP是基于TCP/IP协议的应用层协议，用于客户端和服务器之间的通信，默认80端口。

### 6.1HTTP首部
HTTP首部分为请求报文和响应报文。

#### 6.1.1请求报文
HTTP 请求报文由请求行、请求头部、空行 和 请求包体 4 个部分组成
![](https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/计算机网络/请求报文.png)

**请求行**：请求行由方法字段、URL 字段 和HTTP 协议版本字段 3 个部分组成，他们之间使用空格隔开。常用的 HTTP 请求方法有 GET、POST、HEAD、PUT、DELETE、OPTIONS、TRACE、CONNECT;

**GET和POST**

**GET**：当客户端要从服务器中读取某个资源时，使用GET 方法。GET 方法要求服务器将URL 定位的资源放在响应报文的数据部分，回送给客户端，即向服务器请求某个资源。使用GET 方法时，请求参数和对应的值附加在 URL 后面，利用一个问号(“?”)代表URL 的结尾与请求参数的开始，传递参数长度受限制。例如，/index.jsp?id=100&op=bind。

**POST**：当客户端给服务器提供信息较多时可以使用POST 方法，POST 方法向服务器提交数据，比如完成表单数据的提交，将数据提交给服务器处理。GET 一般用于获取/查询资源信息，POST 会附带用户数据，一般用于更新资源信息。POST 方法将请求参数封装在HTTP 请求数据中，以名称/值的形式出现，可以传输大量数据。

**区别：**

1、GET参数通过URL传递，POST放在Request body中。

2、GET请求会被浏览器主动cache，而POST不会，除非手动设置。

3、GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。

4、Get 请求中有非 ASCII 字符，会在请求之前进行转码，POST不用，因为POST在Request body中，通过 MIME，也就可以传输非 ASCII 字符。

5、 一般我们在浏览器输入一个网址访问网站都是GET请求

6、HTTP的底层是TCP/IP。HTTP只是个行为准则，而TCP才是GET和POST怎么实现的基本。GET/POST都是TCP链接。GET和POST能做的事情是一样一样的。但是请求的数据量太大对浏览器和服务器都是很大负担。所以业界有了不成文规定，（大多数）浏览器通常都会限制url长度在2K个字节，而（大多数）服务器最多处理64K大小的url。

7、GET产生一个TCP数据包；POST产生两个TCP数据包。对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。

8、在网络环境好的情况下，发一次包的时间和发两次包的时间差别基本可以无视。而在网络环境差的情况下，两次包的TCP在验证数据包完整性上，有非常大的优点。但并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。


**POST和PUT**

**POST**：后一个请求不会把第一个请求覆盖掉。POST不是幂等（一个方法重复执行多次，若效果一样就是幂等的）的（所以Post用来增资源，比如新建用户）

**PUT**：如果两个请求相同，后一个请求会把第一个请求覆盖掉。PUT是幂等的。（所以PUT用来改资源，比如修改密码）

#### 6.1.2响应报文
HTTP 响应报文由状态行、响应头部、空行 和 响应包体 4 个部分组成
![](https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/计算机网络/响应报文.png)

#### 6.1.3通用首部字段
1、Cache-Control：操作缓存的工作机制
参数：
```c++
public：明确表明其他用户也可以利用缓存
private：缓存只给特定的用户
no-cache：客户端发送这个指令，表示客户端不接收缓存过的响应，必须到服务器取；服务器返回这个指令，指缓存服务器不能对资源进行缓存。其实是不缓存过期资源，要向服务器进行有效期确认后再处理资源。
no-store：指不进行缓存
max-age：缓存的有效时间（相对时间）
```
2、Connection：
```c++
Connection：keep-Alive (持久连接)
Connection：不再转发的首部字段名
```
3、Date：表明创建http报文的日期和时间

4、Pragma：兼容http1.0，与Cache-Control：no-cache含义一样。但只用在客户端发送的请求中，告诉所有的中间服务器不返回缓存。形式唯一：Pragma：no-cache

5、Trailer：会事先说明在报文主体后记录了哪些首部字段，该首部字段可以应用在http1.1版本分块传输编码中。

6、Transfer-Encoding：chunked （分块传输编码）,
规定传输报文主体时采用的编码方式，http1.1的传输编码方式只对分块传输编码有效

7、Upgrade：升级一个成其他的协议，需要额外指定Connection：Upgrade。服务器可用101状态码作为相应返回。

8、Via：追踪客户端和服务器之间的请求和响应报文的传输路径。可以避免请求回环发生，所以在经过代理时必须要附加这个字段。

#### 6.1.4请求首部字段
1、Accept：通知服务器，用户代理能够处理的媒体类型及媒体类型的相对优先级
q表示优先级的权重值，默认为q = 1.0，范围是0~1（可精确到小数点后3位，1为最大值）
当服务器提供多种内容时，会先返回权重值最高的媒体类型

2、Accept-Charset：支持的字符集及字符集的相对优先顺序，跟Accept一样，用q来表示相对优先级。这个字段应用于内容协商机制的服务器驱动协商。

3、Accept-Encoding：支持的内容编码及内容编码的优先级顺序，q表示相对优先级。
内容编码：gzip、compress、deflate、identity（不执行压缩或者不会变化的默认编码格式）。
可以使用*作为通配符，指定任意的编码格式。

4、Accept-Language：能够处理的自然语言集，以及相对优先级。

#### 6.1.5响应首部字段
1、Location：Location响应报头域用于重定向接受者到一个新的位置。例如：客户端所请求的页面已不存在原先的位置，为了让客户端重定向到这个页面新的位置，服务器端可以发回Location响应报头后使用重定向语句，让客户端去访问新的域名所对应的服务器上的资源;

2、Server：Server 响应报头域包含了服务器用来处理请求的软件信息及其版本。它和 User-Agent 请求报头域是相对应的，前者发送服务器端软件的信息，后者发送客户端软件(浏览器)和操作系统的信息。

3、Vary：指示不可缓存的请求头列表;

#### 6.1.6状态码
状态码 | 含义
- | -
1xx | 指示信息--表示请求已接收，继续处理
2xx | 成功--表示请求已被成功接收、理解、接受
3xx | 重定向--要完成请求必须进行更进一步的操作
4xx | 客户端错误--请求有语法错误或请求无法实现
5xx | 服务器端错误--服务器未能实现合法的请求

100 Continue 表示继续发送剩余的，也就是，你这些材料我先收下，但是你要继续给我剩下的材料
101 Switching Protocols 表示换一种协议，也就是，老王路上被狗追了，心情不好，对工作人员不礼貌，然后工作人员就会说，你这什么态度，要换一种态度或者好一些。

2** 表示已经成功被服务器接收 ，就是差不多这趟进城算是办成了，具体来说
200 OK 表示成功，世界本来就该这样，老王办完事可以回去了

3** 表示重定向，就是老王进城找错地方了，具体来说
300 Multiple Choices 表示多种选择，虽然你找错地方了，我可以给你几个地址，你去那边就行了。
301 Moved Permanently 表示永久重定向 ，你找的这个地方搬家了，我给你他的地址，你去找。
302 Move temporarily 表示临时重定向，要找的地方临时搬家了，你要么去那边，要么过阵子再来
304 Not Modified 表示没有改变，情况跟上次一样，没必要跑这一趟
307Temporary Redirect 表示临时重定向，我这里虽然没有，但是我可以从别的地方拿来给你

4** 请求错误，表示老王自身出了点问题，具体来说
400Bad Request 表示请求错误，老王提的问题和要求有点问题
401 Unauthorized 表示无权限，这次来办事，本来需要介绍信的，你没有只能办完介绍信再来了
403Forbidden 表示拒绝，不用问为什么了，反正就是不给你办
404 Not Found 表示没找到，老王找错地方了，压根不该到这来
405Method Not Allowed 表示方法错误，应该先打电话预约的，却直接来了
410 Gone 表示资源以后不能再用，不要再来了，老王要找的这个人已经死了

5** 服务器错误，就是老王去的这家单位出问题了，具体来讲
500 Internal Server Error 表示服务器内部错误 就是单位着火了，没空给你办
501 Not Implemented 表示不能解决，就是这个问题确实归我们管，但是我们现在没想出办法
504 Gateway Timeout 表示请求超时，就是排队的人太多了，直到下班还没排到，只能下次再来了

### 6.2HTTP1.0、HTTP1.1和HTTP2.0的区别
#### 6.2.1 1.0和1.1的区别
**1、长连接**（HTTP persistent connection ，也有翻译为持久连接）

指数据传输完成了保持TCP连接不断开（不发RST包、不四次握手），等待在同域名下继续用这个通道传输数据；相反的就是短连接。

HTTP1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，并且默认使用长连接，如果加入"Connection: close "，才关闭。

HTTP 1.0默认使用短连接，规定浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接，服务器完成请求处理后立即断开TCP连接，服务器不跟踪 每个客户也不记录过去的请求。要建立长连接，可以在请求消息中包含Connection: Keep-Alive头域，如果服务器愿意维持这条连接，在响应消息中也会包含一个Connection: Keep-Alive的头域。

**2、流水线**

请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟。例如：一个包含有许多图像的网页文件的多个请求和应答可以在一个连接中传输，但每个单独的网页文件的请求和应答仍然需要使用各自的连接。 HTTP 1.1还允许客户端不用等待上一次请求结果返回，就可以发出下一次请求，但服务器端必须按照接收到客户端请求的先后顺序依次回送响应结果，以保证客户端能够区分出每次请求的响应内容。

**3、HOST字段**

 HTTP1.1在Request消息头里头多了一个Host域，而且是必传的，HTTP1.0则没有这个域。
 
在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）。但随着虚拟主机技术的发 展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。
       
HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。此外，服务器应该接受以绝对路径标记的资源请求。

**4、100(Continue) Status**

HTTP/1.1加入了一个新的状态码100（Continue）。客户端事先发送一个只带头域的请求，如果服务器因为权限拒绝了请求，就回送响应码401（Unauthorized）；如果服务器接收此请求就回送响应码100，客户端就可以继续发送带实体的完整请求了。100 (Continue) 状态代码的使用，允许客户端在发request消息body之前先用request header试探一下server，看server要不要接收request body，再决定要不要发request body。

**5、错误通知的管理**

在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。

#### 6.2.2 HTTP1.1和HTTP2.0
**新的二进制格式**（Binary Format），HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。

**多路复用**（MultiPlexing），即连接共享，即每一个request都是是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。

**header压缩**，HTTP1.x的header带有大量信息，而且每次都要重复发送，HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。

**服务端推送**（server push），同SPDY（是Google开发的基于TCP的应用层协议，用以最小化网络延迟，提升网络速度，优化用户的网络使用体验）一样，HTTP2.0也具有server push功能。

### 6.3输入www.baidu.com后发生了什么
**事件顺序**：
1. 浏览器获取输入的域名www.baidu.com
2. 浏览器向DNS请求解析www.baidu.com的IP地址
3.域名系统DNS解析出百度服务器的IP地址 
4. 浏览器与该服务器建立TCP连接(默认端口号80)
5. 浏览器发出HTTP请求，请求百度首页
6. 服务器通过HTTP响应把首页文件发送给浏览器
7. TCP连接释放
8. 浏览器将首页文件进行解析，并将Web页显示给用户。

**DHCP 配置主机信息**
- 假设主机最开始没有 IP 地址以及其它信息，那么就需要先使用 DHCP 来获取。
- 主机生成一个 DHCP 请求报文，并将这个报文放入具有目的端口 67 和源端口 68 的 UDP 报文段中。
- 该报文段则被放入在一个具有广播 IP 目的地址(255.255.255.255) 和源 IP 地址（0.0.0.0）的 IP 数据报中。
- 该数据报则被放置在 MAC 帧中，该帧具有目的地址 FF:FF:FF:FF:FF:FF，将广播到与交换机连接的所有设备。
- 连接在交换机的 DHCP 服务器收到广播帧之后，不断地向上分解得到 IP 数据报、UDP 报文段、DHCP 请求报文，之后生成 DHCP ACK 报文，该报文包含以下信息：IP 地址、DNS 服务器的 IP 地址、默认网关路由器的 IP 地址和子网掩码。该报文被放入 UDP 报文段中，UDP 报文段有被放入 IP 数据报中，最后放入 MAC 帧中。
- 该帧的目的地址是请求主机的 MAC 地址，因为交换机具有自学习能力，之前主机发送了广播帧之后就记录了 MAC 地址到其转发接口的交换表项，因此现在交换机就可以直接知道应该向哪个接口发送该帧。
- 主机收到该帧后，不断分解得到 DHCP 报文。之后就配置它的 IP 地址、子网掩码和 DNS 服务器的 IP 地址，并在其 IP 转发表中安装默认网关。

**ARP 解析 MAC 地址**
- 主机通过浏览器生成一个 TCP 套接字，套接字向 HTTP 服务器发送 HTTP 请求。为了生成该套接字，主机需要知道网站的域名对应的 IP 地址。
- 主机生成一个 DNS 查询报文，该报文具有 53 号端口，因为 DNS 服务器的端口号是 53。
- 该 DNS 查询报文被放入目的地址为 DNS 服务器 IP 地址的 IP 数据报中。
- 该 IP 数据报被放入一个以太网帧中，该帧将发送到网关路由器。
- DHCP 过程只知道网关路由器的 IP 地址，为了获取网关路由器的 MAC 地址，需要使用 ARP 协议。
- 主机生成一个包含目的地址为网关路由器 IP 地址的 ARP 查询报文，将该 ARP 查询报文放入一个具有广播目的地址（FF:FF:FF:FF:FF:FF）的以太网帧中，并向交换机发送该以太网帧，交换机将该帧转发给所有的连接设备，包括网关路由器。
- 网关路由器接收到该帧后，不断向上分解得到 ARP 报文，发现其中的 IP 地址与其接口的 IP 地址匹配，因此就发送一个 ARP 回答报文，包含了它的 MAC 地址，发回给主机。

**DNS 解析域名**
- 知道了网关路由器的 MAC 地址之后，就可以继续 DNS 的解析过程了。
- 网关路由器接收到包含 DNS 查询报文的以太网帧后，抽取出 IP 数据报，并根据转发表决定该 IP 数据报应该转发的路由器。
- 因为路由器具有内部网关协议（RIP、OSPF）和外部网关协议（BGP）这两种路由选择协议，因此路由表中已经配置了网关路由器到达 DNS 服务器的路由表项。
- 到达 DNS 服务器之后，DNS 服务器抽取出 DNS 查询报文，并在 DNS 数据库中查找待解析的域名。
- 找到 DNS 记录之后，发送 DNS 回答报文，将该回答报文放入 UDP 报文段中，然后放入 IP 数据报中，通过路由器反向转发回网关路由器，并经过以太网交换机到达主机。

**HTTP 请求页面**
- 有了 HTTP 服务器的 IP 地址之后，主机就能够生成 TCP 套接字，该套接字将用于向 Web 服务器发送 HTTP GET 报文。
- 在生成 TCP 套接字之前，必须先与 HTTP 服务器进行三次握手来建立连接。生成一个具有目的端口 80 的 TCP SYN 报文段，并向 HTTP 服务器发送该报文段。
- HTTP 服务器收到该报文段之后，生成 TCP SYN ACK 报文段，发回给主机。
- 连接建立之后，浏览器生成 HTTP GET 报文，并交付给 HTTP 服务器。
- HTTP 服务器从 TCP 套接字读取 HTTP GET 报文，生成一个 HTTP 响应报文，将 Web 页面内容放入报文主体中，发回给主机。
- 浏览器收到 HTTP 响应报文后，抽取出 Web 页面内容，之后进行渲染，显示 Web 页面。



**涉及到的协议**:

(1) 应用层：HTTP(WWW访问协议)，DNS(域名解析服务)

DNS解析域名为目的IP，通过IP找到服务器路径，客户端向服务器发起HTTP会话，然后通过运输层TCP协议封装数据包，在TCP协议基础上进行传输。

(2) 传输层：TCP(为HTTP提供可靠的数据传输)，UDP(DNS使用UDP传输)，HTTP会话会被分成报文段，添加源、目的端口；TCP协议进行主要工作。

(3)网络层：IP(IP数据数据包传输和路由选择)，ICMP(提供网络传输过程中的差错检测)，ARP(将本机的默认网关IP地址映射成物理MAC地址)为数据包选择路由，IP协议进行主要工作，相邻结点的可靠传输，ARP协议将IP地址转成MAC地址。


**简单理解**:   域名解析 --> 发起TCP的3次握手 --> 建立TCP连接后发起http请求 --> 服务器响应http请求，浏览器得到html代码 --> 浏览器解析html代码，并请求html代码中的资源（如js、css、图片等） --> 浏览器对页面进行渲染呈现给用户。

### 6.4微信扫码登陆原理
**网页端+服务器**

用户打开网站的登录页面的时候，向浏览器的服务器发送获取登录二维码的请求。服务器收到请求后，随机生成一个uuid，将这个id作为key值存入redis服务器，同时设置一个过期时间，再过期后，用户登录二维码需要进行刷新重新获取。同时，将这个key值和本公司的验证字符串合在一起，通过二维码生成接口，生成一个二维码的图片（二维码生成，网上有很多现成的接口和源码，这里不再介绍。）然后，将二维码图片和uuid一起返回给用户浏览器。

浏览器拿到二维码和uuid后，会每隔一秒向浏览器发送一次，登录是否成功的请求。请求中携带有uuid作为当前页面的标识符。这里有的同学就会奇怪了，服务器只存了个uuid在redis中作为key值，怎么会有用户的id信息呢？ 

这里确实会有用户的id信息，这个id信息是由手机服务器存入redis中的。

**手机端+服务器**

话说，浏览器拿到二维码后，将二维码展示到网页上，并给用户一个提示：请掏出您的手机，打开扫一扫进行登录。用户拿出手机扫描二维码，就可以得到一个验证信息和一个uuid。由于手机端已经进行过了登录，在访问手机端的服务器的时候，参数中都回携带一个用户的token，手机端服务器可以从中解析到用户的userId（这里从token中取值而不是手机端直接传userid是为了安全，直接传userid可能会被截获和修改，token是加密的，被修改的风险会小很多）。手机端将解析到的数据和用户token一起作为参数，向服务器发送验证登录请求（这里的服务器是手机服务器，手机端的服务器跟网页端服务器不是同一台服务器）。服务器收到请求后，首先对比参数中的验证信息，确定是否为用户登录请求接口。如果是，返回一个确认信息给手机端。

手机端收到返回后，将登录确认框显示给用户（防止用户误操作，同时使登录更加人性化）。用户确认是进行的登录操作后，手机再次发送请求。服务器拿到uuId和userId后，将用户的userid作为value值存入redis中以uuid作为key的键值对中。

**登录成功**

然后，浏览器再次发送请求的时候，浏览器端的服务器就可以得到一个用户Id，并调用登录的方法，声成一个浏览器端的token，再浏览器再次发送请求的时候，将用户信息返回给浏览器，登录成功。这里存储用户id而不是直接存储用户信息是因为，手机端的用户信息，不一定是和浏览器端的用户信息完全一致。

## 7、HTTPS
WEB服务存在http和https两种通信方式，http默认采用80作为通讯端口，对于传输采用不加密的方式，https默认采用443，对于传输的数据进行加密传输。

### 7.1HTTPS原理
**7.1.1对称加密和非对称加密**
对称加密加密与解密用的是同样的密钥，是最快速、最简单的一种加密方式。但对称加密有以下几个问题：

1、任意一端加密的密钥一旦泄露，则整个加密就失去了安全性。

2、加密的密钥自身的传输面临安全问题。

非对称加密使用了一对密钥，公钥（public key）和私钥（private key）。私钥只能由一方安全保管，不能外泄，而公钥则可以发给任何请求它的人。相比对称加密，他由于使用了一对密钥，其中私钥是从不外泄的因此有以下优势：

1、因为私钥不需要传输，泄露的可能性极小。

2、公钥本身可以公开传输，因此不存在泄露和安全问题。

但也存在一些不足，主要是加密效率上，相比对称加密需要更大的计算成本和时间成本。

对称加密和非对称加密配合使用，为现在网络安全传输提供了很好的解决方案。

1、每次建立连接时，生成对称加密的密钥。

2、使用非对称加密对密钥进行加密后传输，客户端和服务器进行密钥同步。

3、客户端和服务器端使用对称加密传输实际数据。

由于对称加密的密钥每次连接都不一样，是的泄露的风险大大降低，同时又保障了数据传输的安全性。SSL便是建立在对称加密和非对称加密配合使用的基础上的。

**HTTPS在传输的过程中会涉及到三个密钥**：

服务器端的公钥和私钥，用来进行非对称加密

客户端生成的随机密钥，用来进行对称加密

一个HTTPS请求实际上包含了两次HTTP传输，可以细分为8步：

1. 客户端向服务器发起HTTPS请求，连接到服务器的443端口

2. 服务器端有一个密钥对，即公钥和私钥，是用来进行非对称加密使用的，服务器端保存着私钥，不能将其泄露，公钥可以发送给任何人。

3. 服务器将自己的公钥发送给客户端。

4. 客户端收到服务器端的公钥之后，会对公钥进行检查，验证其合法性，如果发现发现公钥有问题，那么HTTPS传输就无法继续。严格的说，这里应该是验证服务器发送的数字证书的合法性，关于客户端如何验证数字证书的合法性。如果公钥合格，那么客户端会生成一个随机值，这个随机值就是用于进行对称加密的密钥，我们将该密钥称之为client key，即客户端密钥，这样在概念上和服务器端的密钥容易进行区分。然后用服务器的公钥对客户端密钥进行非对称加密，这样客户端密钥就变成密文了，至此，HTTPS中的第一次HTTP请求结束。

5. 客户端会发起HTTPS中的第二个HTTP请求，将加密之后的客户端密钥发送给服务器。

6. 服务器接收到客户端发来的密文之后，会用自己的私钥对其进行非对称解密，解密之后的明文就是客户端密钥，然后用客户端密钥对数据进行对称加密，这样数据就变成了密文。

7. 然后服务器将加密后的密文发送给客户端。

8. 客户端收到服务器发送来的密文，用客户端密钥对其进行对称解密，得到服务器发送的数据。这样HTTPS中的第二个HTTP请求结束，整个HTTPS传输完成。
![](https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/计算机网络/HTTPS过程.png)

**加密过程**
- server生成一个公钥和私钥，把公钥发送给第三方认证机构（CA）；
- CA把公钥进行MD5加密，生成数字签名；再把数字签名用CA的私钥进行加密，生成数字证书。CA会把这个数字证书返回给server；
- server拿到数字证书之后，就把它传送给浏览器；
- 浏览器会对数字证书进行验证，首先，浏览器本身会内置CA的公钥，会用这个公钥对数字证书解密，验证是否是受信任的CA生成的数字证书；
- 验证成功后，浏览器会随机生成对称秘钥，用server的公钥加密这个对称秘钥，再把加密的对称秘钥传送给server；
- server收到对称秘钥，会用自己的私钥进行解密，之后，它们之间的通信就用这个对称秘钥进行加密，来维持通信。
![](https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/计算机网络/加密过程.png)

### 7.2怎么保证服务器给客户端下发的公钥是真正的公钥，而不是中间人伪造的公钥呢？
使用权威机构的公钥解密数字证书，得到证书内容（服务器的公钥）以及证书的数字签名，然后根据证书上描述的计算证书签名的方法计算一下当前证书的签名，与收到的签名作对比，如果一样，表示证书一定是服务器下发的，没有被中间人篡改过。因为中间人虽然有权威机构的公钥，能够解析证书内容并篡改，但是篡改完成之后中间人需要将证书重新加密，但是中间人没有权威机构的私钥，无法加密，强行加密只会导致客户端无法解密，如果中间人强行乱修改证书，就会导致证书内容和证书签名不匹配。所以证书签名就能判断证书是否被篡改。

### 7.3证书如何安全传输，被掉包了怎么办？
中间人同样可以向权威机构申请一份证书，然后在服务器给客户端下发证书的时候劫持原证书，将自己的假证书下发给客户端，客户端收到之后依然能够使用权威机构的公钥解密证书，并且证书签名也没问题。但是这个时候客户端还需要检查证书中的域名和当前访问的域名是否一致。如果不一致，会发出警告！

## 8、HTTP缓存机制
HTTP的缓存分为强缓存和协商缓存（对比缓存）。
### 8.1强制缓存
在缓存数据未失效的情况下，可以直接使用缓存数据；在没有缓存数据的时候，浏览器向服务器请求数据时，服务器会将数据和缓存规则一并返回，缓存规则信息包含在响应header中。
- Expires：缓存过期时间（HTTP1.0）
缺点：生成的是绝对时间，但是客户端时间可以随意修改，会导致误差。
- Cache-Control ：HTTP1.1，优先级高于Expires
可设置参数：
```c++
private: 客户端可以缓存
public: 客户端和代理服务器都可缓存
max-age=xxx: 缓存的内容将在 xxx 秒后失效
no-cache: 需要使用协商缓存来验证缓存数据（后面介绍）
no-store: 所有内容都不会缓存，强制缓存，对比缓存都不会触发
```
Expires和Cache-Control决定了浏览器是否要发送请求到服务器，ETag和Last-Modified决定了服务器是要返回304+空内容还是新的资源文件。

### 8.2协商缓存
浏览器第一次请求数据时，服务器会将缓存标识与数据一起返回给客户端，客户端将二者备份至缓存数据库中。再次请求数据时，客户端将备份的缓存标识发送给服务器，服务器根据缓存标识进行判断，判断成功后，返回304状态码，通知客户端比较成功，可以使用缓存数据。


### 8.3缓存判断顺序
- 先判断Cache-Control，在Cache-Control的max-age之内，直接返回200 from cache；
- 没有Cache-Control再判断Expires，再Expires之内，直接返回200 from cache；
- Cache-Control=no-cache或者不符合Expires，浏览器向服务器发送请求；
- 服务器同时判断ETag和Last-Modified，都一致，返回304，有任何一个不一致，返回200。

### 8.4cookie和session
#### 8.4.1cookie
解决http的无状态问题，是客户端保存用户信息的一种机制，用来记录用户的一些信息，来实现session的跟踪。

1、cookie属性
name、value :以key/value的形式存在

comment：说明该cookie的用处

domain：可以访问该cookie的域名

Expires/maxAge：cookie失效时间。负数：临时cookie，关闭浏览器就失效；0：表示删除cookie，默认为-1

path：可以访问此cookie的页面路径

size：cookie的大小

secure：是否以https协议传输

version：该cookie使用的版本号，0遵循Netscape规范，大多数用这种，1遵循W3C规范

HttpOnly：此属性为true，则只有在http请求头中会带有此cookie的信息，而不能通过document.cookie来访问此cookie，能防止XSS攻击。

2、cookie原理

客户端请求服务器时，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个Cookie。而客户端浏览器会把Cookie保存起来。当浏览器再请求服务器时，浏览器把请求的网址连同该Cookie一同提交给服务器。服务器通过检查该Cookie来获取用户状态。

3、cookie同源和跨域

cookie的同源是域名相同，忽略协议和端口，不可跨域。

#### 8.4.2session
session是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中。
session的运行依赖session id，而session id是存在cookie中的。

1、session原理
当客户端请求创建一个session的时候，服务器会先检查这个客户端的请求里是否已包含了一个session标识——sessionId。如果已包含这个sessionId，则说明以前已经为此客户端创建过session，服务器就按照sessionId把这个session检索出来使用（如果检索不到，可能会新建一个。如果客户端请求不包含sessionId，则为此客户端创建一个session并且生成一个与此session相关联的sessionId。

2、如果禁用了cookie
使用URL重写技术来进行会话跟踪。在 url 中传递 session id,即每次HTTP交互，URL后面都会被附加上一个诸如 sid=xxxxx 这样的参数，服务端据此来识别用户。

#### 8.4.3区别
- cookie 数据存放在客户的浏览器上，session数据放在服务器上；
- cookie 不是很安全，别人可以分析存放在本地的 cookie 并进行 cookie 欺骗考虑到安全应当使用 session;
- session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能考虑到减轻服务器性能方面，应当使用 cookie;
- 单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个 cookie。session可以达到5M甚至更多
- Cookie 只能存储 ASCII 码字符串，而 Session 则可以存储任何类型的数据，因此在考虑数据复杂性时首选 Session

## 9、HTTP断点续传
有时候可能下载的文件过大，一次性传输遇到网络问题就很可能传输失败而需要全部重新下载。另外，断点续传还能够提供并发的下载提高下载速率。

**浏览器**

如果浏览器发起的请求中没有带range字段，而服务器没有返回全部数据，而是返回部分数据和一个206的状态码，则浏览器不会发起对剩余字段的请求，此时下载失败。

如果浏览器发起的请求带range字段，服务器返回指定range范围的数据，则下载成功

**迅雷等下载器**

如果迅雷发起的请求中没有带range字段，而服务器没有返回全部数据，而是返回部分数据和一个206的状态码，则迅雷会发起对剩余字段的请求，此时下载成功。

如果迅雷发起的请求带range字段，服务器返回指定range范围的数据，则下载成功。（服务器返回的range字段最好起始和结束点都一致，如果返回的range范围过小迅雷可能会提示下载失效）

**结论**

服务器的设计方面，应该让range的主动权应该掌握在客户端这边，如果请求中没有带range字段，则应该全部数据返回。如果带range字段，则应该返回确切范围内的数据。

如果下载的数据过大，服务器担心承受不住，可以断开TCP连接，则客户端那边会根据已经下载的内容再去发起对未下载内容的请求（带range字段）

这种设计模式下用迅雷下载，会先发起一个不带range的请求，拿到整个文件大小后再分段多线程发起对部分数据的请求。用谷歌浏览器下载，则直接是一个超级大的http包返回（状态码200）