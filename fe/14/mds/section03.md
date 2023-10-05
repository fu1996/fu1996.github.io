## 正则表达式

** 1、什么是正则表达式： **  
能让计算机读懂的字符串匹配规则。  

** 2、正则表达式的写法：**  
var re=new RegExp('规则', '可选参数');  
var re=/规则/参数;  

** 3、规则中的字符 **  
1）普通字符匹配：  
如：/a/  匹配字符 ‘a’，/a,b/  匹配字符 ‘a,b’  

2）转义字符匹配：  
\d   匹配一个数字，即0-9  
\D   匹配一个非数字，即除了0-9  
\w   匹配一个单词字符（字母、数字、下划线）  
\W   匹配任何非单词字符。等价于\[^A-Za-z0-9_]  
\s   匹配一个空白符  
\S   匹配一个非空白符  
\b   匹配单词边界  
\B   匹配非单词边界  
.    匹配一个任意字符
```
var sTr01 = '123456asdf';
var re01 = /\d+/;
//匹配纯数字字符串
var re02 = /^\d+$/;
alert(re01.test(sTr01)); //弹出true
alert(re02.test(sTr01)); //弹出false
```  

** 4、量词：对左边的匹配字符定义个数 **  
? 出现零次或一次（最多出现一次）  
\+ 出现一次或多次（至少出现一次）  
\* 出现零次或多次（任意次）  
{n} 出现n次  
{n,m} 出现n到m次  
{n,} 至少出现n次  

** 5、任意一个或者范围 **   
[abc123] : 匹配‘abc123’中的任意一个字符  
[a-z0-9] : 匹配a到z或者0到9中的任意一个字符  

** 6、限制开头结尾 **    
^  以紧挨的元素开头  
$  以紧挨的元素结尾  


** 7、修饰参数：**    
g： global，全文搜索，默认搜索到第一个结果接停止  
i： ingore case，忽略大小写，默认大小写敏感


** 8、常用函数 **  
1、test  
用法：正则.test(字符串)  匹配成功，就返回真，否则就返回假     

2、replace  
用法：字符串.replace(正则，新的字符串) 匹配成功的字符去替换新的字符   


** 正则默认规则 **  
匹配成功就结束，不会继续匹配，区分大小写

```
var sTr01 = 'abcdefedcbaCef';
var re01 = /c/;
var re02 = /c/g;
var re03 = /c/gi;

var sTr02 = sTr01.replace(re01,'*');
var sTr03 = sTr01.replace(re02,'*');
var sTr04 = sTr01.replace(re03,'*');
alert(sTr02); // 弹出 ab*defedcbaCef
alert(sTr03); // 弹出 ab*defed*baCef
alert(sTr04); // 弹出 ab*defed*ba*ef
```

** 常用正则规则 **  
```
//用户名验证：(数字字母或下划线6到20位)
var reUser = /^\w{6,20}$/;

//邮箱验证：		
var reMail = /^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/i;

//密码验证：
var rePass = /^[\w!@#$%^&*]{6,20}$/;

//手机号码验证：
var rePhone = /^1[3458]\d{9}$/;
```


** 课堂实例 **  
注册页面表单验证  
