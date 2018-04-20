var a = new String;
var b = new Number;
var c = new Boolean;
var d = new Array;
var e = new Object;
var f= Symbol();
console.log(typeof(d));

var g = Symbol('sunajun')
console.log(g)
console.log(g.toString())

//Symbol在对象中的应用
var jspang = Symbol()
var object ={
  [jspang]:'技术胖'
}
console.log(object[jspang])
object[jspang] = 'web'
console.log(object[jspang])

var obj={name:'jspang',skill:'web',age:18};

for (let item in obj){
  console.log(obj[item]);
}

//Symbol对象元素的保护作用
let obj1={name:'jspang',skill:'web'};
let age=Symbol();
obj1[age]=18;
for (let item in obj1){
  console.log(obj1[item]);
}
console.log(obj1);