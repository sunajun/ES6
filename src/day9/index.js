//对象的函数解构 我们在前后端分离时，后端经常返回来JSON格式的数据，前端的美好愿望是直接把这个JSON格式数据当作参数，传递到函数内部进行处理
let json = {
  a:'saj',
  b:'孙阿军'
}

function fun(a,b='saj') {
  console.log(a,b)
}
fun(json)

//数组的函数解构
let arr = ['beijing','shanghai','guangzhou']
function test(a,b,c) {
  console.log(a,b,c)
}
test(...arr)

//in的用法 in是用来判断对象或者数组中是否存在某个值的
//对象判断
console.log('a' in json)
//数组判断
let arr1 = [,,,,]
console.log(arr1.length) //4
console.log(0 in arr1)//这里的0指的是数组下标位置是否为空
console.log(0 in arr)

//数组遍历方法
arr.forEach((index,value) => console.log(index,value))
arr.some(x => console.log(x))
arr.filter(x=>console.log(x))
console.log(arr.map(x=>'web')) //这里起一个替换的作用


//数组转字符串
//join方法
console.log(arr.join('|'))
//toString方法
console.log(arr.toString())