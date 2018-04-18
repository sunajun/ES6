//默认值
function add(a,b=1) {
  return a+b
}
console.log(add(3))

//主动抛出错误
// function add1(a,b=1) {
//   if (a==0){
//     throw new Error('this is error')
//   }
//   return a+b
// }
// console.log(add1(0))

//函数中的严谨模式
// 我们在ES中就经常使用严谨模式来进行编程，但是必须写在代码最上边，相当于全局使用。在ES6中我们可以写在函数体中，相当于针对函数来使用。
function add2(a,b) { //如果你使用了默认值，再使用严谨模式的话，就会有冲突，所以我们要取消默认值的操作
  'use strict'
  if (a==0){
    throw new Error('this is error')
  }
  return a+b
}
console.log(add2(1,2))
//获得需要传递的参数个数 ,但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1， 也就是说它得到的是必须传入的参数。
console.log(add2.length)

//箭头函数
var add3 = (a,b=1) => a+b
console.log(add3(5))