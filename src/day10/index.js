//对象赋值
let name = 'jspang'
let skill = 'web'
var obj = {name,skill} //ES6允许把声明的变量直接赋值给对象
console.log(obj)

//对象key值构建  有时候我们会在后台取出key值，而不是我们前台定义好的，
//这时候我们如何构建我们的key值那。比如我们在后台取了一个key值，然后可以用[ ] 的形式，进行对象的构建。
let key = 'skill'
var obj1 = {
  [key]:'web'
}
console.log(obj1.skill)

//自定义对象方法
var obj = {
  add:function (a,b) {
    return a+b
  }
}
console.log(obj.add(1,2))

//Object.is()对象比较
var object1 = {name:'saj'}
var object2 = {name:'saj'}
console.log(object1.name === object2.name)
console.log(Object.is(object1.name,object2.name))

console.log('-----------------------')
console.log(+0 === -0);  //true
console.log(NaN === NaN ); //false
console.log(Object.is(+0,-0)); //false
console.log(Object.is(NaN,NaN)); //true
//===为同值相等，is()为严格相等


//Object.assign() 合并对象
var a = {a:'saj'}
var b = {b:'孙阿军'}
var c ={c:'web'}
let d = Object.assign(a,b,c)
console.log(d)