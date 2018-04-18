// let saj = '孙阿军'
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友'+saj+'。这节课我们学习字符串模版。';
// document.write(blog);

//字符串模板
// let saj = '孙阿军'
// let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${saj}。<br/>这节课我们学习字符串模版。`
// document.write(blog)

//对运算的支持
// let a =1
// let b =2
// let result = `${a+b}`
// document.write(result)

//字符串查找
//ES5写法
// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// document.write(blog.indexOf(jspang));

//ES6写法
let jspang='技术胖';
let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
document.write(blog.includes(jspang));

//判断开头是否存在
blog.startsWith(jspang)
//判断结尾是否存在
blog.endsWith(jspang)
//复制字符串
document.write('jspang|'.repeat(3))