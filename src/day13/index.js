let json = {
  name:'jspang',
  skill:'web'
}

console.log(json.name)
console.log('--------------')
var map = new Map();
map.set(json,'iam')
console.log(map)
console.log('--------------')
map.set('jspang',json)
console.log(map)
console.log('--------------')
//map的增删查
//取值get
console.log(map.get(json))
console.log('--------------')
//删除delete
map.delete(json)
console.log(map)
console.log('--------------')

//size属性
console.log(map.size)
console.log('--------------')
//查找是否存在has
console.log(map.has('jspang'))
//清楚所有元素
map.clear()
console.log(map)
