//json数组格式  一个标准的JSON数组格式，跟普通的JSON对比是在最后多了一个length属性
let json = {
  '0':'上海',
  '1':'北京',
  '2':'广州',
  length : 3
}

let arr = Array.from(json)
console.log(arr)

//Array.of()方法
let arr1 = Array.of(3,4,5,6)
console.log(arr1)
let arr2 = Array.of('saj','cyx','dad')
console.log(arr2)

//find()实例方法
let arr3=[1,2,3,4,5,6,7,8,9]
console.log(arr3.find(function (value,index,arr3) {
  return value > 5;
}))

//fill()实例方法
let arr4=[0,1,2,3,4,5,6,7,8,9]
arr4.fill('saj',2,5)
console.log(arr4)

//数组遍历
let arr5 = ['上海','北京','广州']
for (let item of arr5){
  console.log(item)
}
for (let index of arr5.keys()){
  console.log(index)
}

for (let [index,value] of arr5.entries()){
  console.log(index+':'+value)
}

let list = arr5.entries();//entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值
console.log(list.next().value)
console.log(list.next().value)
console.log(list.next().value)