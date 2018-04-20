var obj={
  add:function(val){
    return val+10;
  },
  name:'I am Jspang'

};
console.log(obj.add(100));
console.log(obj.name);
/*
* get属性是在你得到某对象属性值时预处理的方法，他接受三个参数

  target：得到的目标值
  key：目标的key值，相当于对象的属性
  property：这个不太常用，用法还在研究中，还请大神指教。
  set属性

  set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。

  target:目标值。
  key：目标的Key值。
  value：要改变的值。
  receiver：改变前的原始值。
*/
var pro = new Proxy({
  add:function (val) {
    return val + 10;
  },
  name:'i an sunajun'
},{
  get:function (target,key,property) {
    console.log('com in get')
    return target[key];
  },
  set:function (target,key,value,receiver) {
    console.log(`setting ${key} = ${value}`)
    return target[key] = value
  }
})

console.log(pro.name)
pro.name = '孙阿军'
console.log(pro.name)


let target = function () {
  return ' i am jspang'
}

var handler = {
  apply(target,ctx,args){
    console.log('do apply')
    return Reflect.apply(...arguments);
  }
}

var pro1 = new Proxy(target,handler);
console.log(pro1)
