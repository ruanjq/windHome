(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{223:function(t,e,a){"use strict";a.r(e);var n=a(2),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-网络协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-网络协议"}},[t._v("#")]),t._v(" HTTP 网络协议")]),t._v(" "),a("h2",{attrs:{id:"http-请求报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-请求报文"}},[t._v("#")]),t._v(" HTTP 请求报文")]),t._v(" "),a("p",[t._v("一个HTTP请求报文由以下四部分组成："),a("code",[t._v("请求行(request line)")]),t._v(","),a("code",[t._v("消息头部(header)")]),t._v(","),a("code",[t._v("空行")]),t._v(","),a("code",[t._v("请求正文")]),t._v("\n如下请求报文：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("\nPOST /index.html HTTP/1.1\nHOST: www.xxx.com\nUser-Agent: Mozilla/5.0(Windows NT 6.1;rv:15.0) Firefox/15.0\n\nusername=admin&pwd=123456qw\n\n")])])]),a("h3",{attrs:{id:"_1-请求行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求行"}},[t._v("#")]),t._v(" 1:请求行")]),t._v(" "),a("p",[t._v("请求行由 "),a("code",[t._v("请求方法")]),t._v(","),a("code",[t._v("URL")]),t._v(" 和 "),a("code",[t._v("HTTP协议版本")]),t._v("3个部分组成\n例如：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("GET /index.html HTTP/1.1\n")])])]),a("p",[a("strong",[t._v("常见的HTTP协议的请求方法有")])]),t._v(" "),a("ul",[a("li",[t._v("GET 获取资源")]),t._v(" "),a("li",[t._v("POST 往服务器提交数据,传输实体主体")]),t._v(" "),a("li",[t._v("PUT 创建或修改数据")]),t._v(" "),a("li",[t._v("HEAD 获取报文首部")]),t._v(" "),a("li",[t._v("DELETE 删除数据")]),t._v(" "),a("li",[t._v("OPTIONS 询问服务器是否支持HTTP请求方法")])]),t._v(" "),a("h3",{attrs:{id:"_2-请求头部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-请求头部"}},[t._v("#")]),t._v(" 2:请求头部")]),t._v(" "),a("p",[t._v("请求头部由关键字/值对组成,每行一对,关键字和值用英文冒号:分割. 请求头部用于告知服务器有关于客户端的信息。")]),t._v(" "),a("ul",[a("li",[t._v("通用头部(General Header)")]),t._v(" "),a("li",[t._v("请求头部(Request Header)")]),t._v(" "),a("li",[t._v("响应头部(Responce Header)")]),t._v(" "),a("li",[t._v("实体头部(Entity Header Fields)")])]),t._v(" "),a("h3",{attrs:{id:"_3-空行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-空行"}},[t._v("#")]),t._v(" 3:空行")]),t._v(" "),a("p",[t._v("最后一个请求头之后是一个空行,发送回车符和换行符,通知服务器以下不再有请求头")]),t._v(" "),a("h3",{attrs:{id:"_4-请求数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-请求数据"}},[t._v("#")]),t._v(" 4:请求数据")]),t._v(" "),a("p",[t._v("请求数据不在"),a("code",[t._v("POST")]),t._v("方法使用,适用于需要客户填写表单的场合,与请求数据相关的最常使用的请求头是"),a("code",[t._v("Content-Type")]),t._v("和"),a("code",[t._v("Content-Length")])]),t._v(" "),a("h2",{attrs:{id:"http-响应报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-响应报文"}},[t._v("#")]),t._v(" HTTP 响应报文")]),t._v(" "),a("p",[t._v("HTTP 响应报文由4个部分组成 "),a("code",[t._v("响应行")]),t._v(","),a("code",[t._v("响应头")]),t._v(", "),a("code",[t._v("空行")]),t._v(","),a("code",[t._v("响应体")]),t._v("\n如下响应报文：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("\nHTTP/1.1 200 OK\nContent-Encoding: gzip\nContent-Type: text/html;charset=utf-8\n\n"),a("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Document"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("this is http response"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),a("h3",{attrs:{id:"_1-响应行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-响应行"}},[t._v("#")]),t._v(" 1:响应行")]),t._v(" "),a("p",[t._v("响应行包含以下几部分")]),t._v(" "),a("ul",[a("li",[t._v("HTTP-Version 服务器HTTP协议的版本")]),t._v(" "),a("li",[t._v("Status-Code 服务器发回的响应状态代码")]),t._v(" "),a("li",[t._v("Reason-Phrase 状态代码的文本描述")])]),t._v(" "),a("h2",{attrs:{id:"网络协议分层模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络协议分层模型"}},[t._v("#")]),t._v(" 网络协议分层模型")]),t._v(" "),a("ul",[a("li",[t._v("OSI 7层模型: (应用层，表示层，会话层，传输层，网络层，数据链路层，物理层)")]),t._v(" "),a("li",[t._v("TCP/IP 4层模型：（应用层，传输层，网络层，数据链路层）")])]),t._v(" "),a("h2",{attrs:{id:"tcp-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-特性"}},[t._v("#")]),t._v(" TCP 特性")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TCP")]),t._v(" 是一种面向连接的单播协议,在发送数据前，通信双方必须建立在彼此的一条链接上")]),t._v(" "),a("li",[t._v("在一个"),a("code",[t._v("TCP")]),t._v("连接中,仅有两方进行彼此通信，广播和多播不能用于TCP")]),t._v(" "),a("li",[t._v("TCP 并不能保证数据一定会被对方接受到")])]),t._v(" "),a("h2",{attrs:{id:"tcp-ip-三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-三次握手"}},[t._v("#")]),t._v(" TCP/IP 三次握手")]),t._v(" "),a("p",[t._v("所谓三次握手"),a("code",[t._v("(Three-way Handshake)")]),t._v("是指建立一个TCP连接时，需要客户端和服务端总共发送3个包。")]),t._v(" "),a("p",[t._v("【三次握手的目的】")]),t._v(" "),a("ul",[a("li",[t._v("确认客户端和服务端,接受数据和发送数据的能力是否正常")]),t._v(" "),a("li",[t._v("指定自己的初始化序列号,为后面的可靠传送做准备")]),t._v(" "),a("li",[t._v("如果是HTTPS协议的话,三次握手过程还会进行数字证书的校验以及加密密钥的生成。")])]),t._v(" "),a("p",[t._v("【三次握手流程】")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第一次握手: 客户端给服务端发送一个"),a("code",[t._v("SYN")]),t._v("报文,并指明客户端的初始化序列号(ISN). 此时客户端处于"),a("code",[t._v("SYN_SENT")]),t._v("状态.（Synchronize Sequence Numbers）")])]),t._v(" "),a("li",[a("p",[t._v("第二次握手：服务端收到"),a("code",[t._v("SYN")]),t._v("报文之后,会以自己的"),a("code",[t._v("SYN")]),t._v("作为应答，并指定自己的初始化序列号ISN,同时会把客户端的"),a("code",[t._v("ISN+1")]),t._v("作为"),a("code",[t._v("ACK")]),t._v("的值，表示已经收到了客户端的"),a("code",[t._v("SYN")]),t._v("，此时服务器处于"),a("code",[t._v("SYN_RCVD")]),t._v("的状态")])]),t._v(" "),a("li",[a("p",[t._v("第三次握手,客户端收到"),a("code",[t._v("SYN")]),t._v("报文后,会发送一个"),a("code",[t._v("ACK")]),t._v("报文,当然,也是一样把服务器的"),a("code",[t._v("ISN+1")]),t._v("作为"),a("code",[t._v("ACK")]),t._v("的值，表示已经收到了服务端的"),a("code",[t._v("SYN")]),t._v("报文,此时客户端处于"),a("code",[t._v("ESTABLISHED")]),t._v(" 状态")])]),t._v(" "),a("li",[a("p",[t._v("服务器收到ACK 报文之后,也处于"),a("code",[t._v("ESTABLISHED")]),t._v(" 状态，此时，双方建立链接，TCP握手结束")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("客户端(Client)状态")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("建立连接（三次握手）")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("服务端(Server)状态")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("CLOSED")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("LISTEN")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SYN报文,seq=k  ----\x3e")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("SYN_SENT")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("<---- SYN 报文,ACK=seq(k)+1,seq=y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("SYN_RCVD")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ACK=y+1  -----\x3e")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ESTABLISHED")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ESTABLISHED")])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/HIT-Alibaba/interview/master/img/tcp-connection-made-three-way-handshake.png",alt:"三次握手流程",title:"三次握手流程"}})]),t._v(" "),a("h2",{attrs:{id:"osi-7层网络模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osi-7层网络模型"}},[t._v("#")]),t._v(" "),a("code",[t._v("OSI")]),t._v(" 7层网络模型")]),t._v(" "),a("p",[t._v("OSI是 "),a("code",[t._v("Open System Interconnection")]),t._v("的缩写,国际化标准化组织(ISO)制定了OSI模型,定义了不同互联网的标准,是设计和描述计算机网络通信的基本框架。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参考模型(从上往下)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("各层含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("应用层")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("为应用程序提供服务,比如"),a("code",[t._v("HTTP")]),t._v(","),a("code",[t._v("FTP")]),t._v(","),a("code",[t._v("SMTP")]),t._v(","),a("code",[t._v("POP3")]),t._v("等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("表示层")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数据格式转换翻译，数据加密，解密，压缩解压缩")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("会话层")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不同机器之间的用户建立及管理会话")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("传输层")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("建立管理和维护端到端的链接,TCP,UDP")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("网络层")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IP处理及路由选择")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("数据链路层")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("物理地址，网卡交换机")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("物理层")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("光纤线缆通信比特流传输")])])])]),t._v(" "),a("h2",{attrs:{id:"四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[t._v("#")]),t._v(" 四次挥手")]),t._v(" "),a("p",[t._v("TCP链接的断开需要发送4个包,因此称为4次挥手(Four-way handshake),也叫改进的三次握手,客户端和服务器均可主动发起挥手动作。在socket编程中,任何一方执行close() 操作即可产生挥手操作")]),t._v(" "),a("h3",{attrs:{id:"第一次挥手-fin-1-seq-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一次挥手-fin-1-seq-x"}},[t._v("#")]),t._v(" 第一次挥手(FIN=1,seq=x)")]),t._v(" "),a("p",[t._v("假设客户端想要关闭链接,客户端发送一个"),a("code",[t._v("FIN")]),t._v("标志位为1的包，表示自己已经没有数据可以发送了,但是仍然可以接收数据。发送完毕后，客户端进入FIN_WAIT_1 状态")]),t._v(" "),a("h3",{attrs:{id:"第二次挥手-ack-1-acknum-x-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二次挥手-ack-1-acknum-x-1"}},[t._v("#")]),t._v(" 第二次挥手(ACK=1,ACKnum=x+1)")]),t._v(" "),a("p",[t._v("服务端确认客户端的FIN 包,发送一个确认包,表明自己接收到了客户端关闭链接的请求,但还没有准本好关闭连接。\n发送完毕后。服务端进入CLOSE_WAIT状态,客户端接收到这个确认包之后进入FIN_WAIT_2状态,等待服务器端关闭连接。")]),t._v(" "),a("h3",{attrs:{id:"第三次挥手-fin-seq-y"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三次挥手-fin-seq-y"}},[t._v("#")]),t._v(" 第三次挥手(FIN=,seq=y)")]),t._v(" "),a("p",[t._v("服务端准备好关闭连接时候,向客户端发送结束连接请求,FIN置位1。发送完毕后,服务端进入LAST_ACK状态,等待来自客户端最后一个ACK。")]),t._v(" "),a("h3",{attrs:{id:"第四次挥手-ack-1-acknum-y-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四次挥手-ack-1-acknum-y-1"}},[t._v("#")]),t._v(" 第四次挥手(ACK=1,ACKnum=y+1)")]),t._v(" "),a("p",[t._v("客户端收到服务端发送的FIN报文,向服务端发送ACK报文,ACMnum=y+1,然后客户端进入TIME_WAIT状态,服务端收到客户端ACK报文后，就关闭连接。此时，客户端等待2MSL后依然没有收到回复,则证明服务端已正常关闭,客户端也可以关闭连接了.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("客户端(Client)状态")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("断开连接（四次挥手）")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("服务端(Server)状态")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ESTABLISHED")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ESTABLISHED")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FIN,ACK=1,seq=x  ----\x3e")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("FIN_WAIT_1")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("<---- ACK ack=x+1 seq=1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("FIN_WAIT_2")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("CLOSE_WAIT")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("<---- ACK ack=x+1 seq=1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("LAST_ACK")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ACK,ACK=seq+1,seq=ack  ----\x3e")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("TIME_WAIT")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("CLOSE")])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/front/img_982e17a3dba88e42a9accfab0aca1ef2.png",alt:"TCP/IP4次挥手",title:"TCP/IP4次挥手"}})]),t._v(" "),a("p",[t._v("::: 计算规则")]),t._v(" "),a("ul",[a("li",[t._v("seq: 为序列号")]),t._v(" "),a("li",[t._v("ack: 为应答码")]),t._v(" "),a("li",[t._v("seq = 对方上次的ack(首次发送时seq为系统随机生成)")]),t._v(" "),a("li",[t._v("ack = 对方的seq+1(无数据传输时) 或者seq+L(报文数据的长度L)")]),t._v(" "),a("li",[t._v("参考 "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000014213178",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP的三次握手和四次挥手"),a("OutboundLink")],1),t._v("\n:::")])]),t._v(" "),a("h2",{attrs:{id:"常见的http-状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的http-状态码"}},[t._v("#")]),t._v(" 常见的HTTP 状态码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1xx: 状态信息码,表示服务端已经接收了客户端的请求,客户端可继续发送请求\n    100（Continue/继续）\n    101（Switching Protocols/转换协议）\n\n2XX: 成功状态码\n    200 请求OK\n    204 No Content 没有内容\n    206 Partial Content 局部内容\n\n3XX: 跳转\n    301: (Permanently Moved) 永久重定向\n    302：(Temporarily Moved ) 临时重定向\n\n4xx：用户指定客户端的错误\n    400（Bad Request/错误请求）：指出客户端请求中的语法错误\n    401（Unauthorized/未授权）：表示客户端在授权头信息中没有有效的身份信息时，访问收到密码保护的页面。这个授权必须包含一个WWW-Authenticate的授权信息头\n    403（Forbidden/禁止）：表示除非拥有授权，否则服务器拒绝提供所请求的资源。\n    404（Not Found）：无法找到资源\n\n5xx：用户指定服务器的错误\n    500 (Internal Server Error/内部服务器错误)：是常用的“服务器错误”状态\n    502 (Bad Gateway/错误的网关)：被用于充当代理或网关的服务器；该状态指出接收服务器接收到远端服务器的错误响应。\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);