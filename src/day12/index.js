let setArr = new Set(['beijing','shanghai','hefei','beijing'])  //Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
console.log(setArr)
//追加add
setArr.add('guangzhou')
console.log(setArr)
//删除delete
setArr.delete('hefei')
console.log(setArr)
//查找
console.log('--------------')
console.log(setArr.has('shanghai'))
//循环
console.log('--------------')
for (let item of setArr){
  console.log(item)
}
//forEach循环
console.log('--------------')
setArr.forEach((value => console.log(value)))
//size属性
console.log('--------------')
console.log(setArr.size)
//删除clear
console.log('--------------')
setArr.clear()
console.log(setArr)


//WeakSet声明
console.log('--------------') //实际开发中Set用的比较多，WeakSet用的并不多，但是他对传入值必须是对象作了很好的判断
let weakObj = new WeakSet()
let obj = {a:'jspang',b:'技术胖'}
let obj1 = obj
weakObj.add(obj1)
weakObj.add(obj)
console.log(weakObj)