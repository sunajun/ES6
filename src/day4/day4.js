//扩展运算符
function test(...arg) {
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
}

test(1,2,3)

let arr1=['www','jspang','com'];
// let arr2=arr1;
let arr2=[...arr1];
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);


function test2(first,...arg) {
  console.log(arg.length)
}
test2(0,1,2,3,4,5,6,7)

function jspang(first,...arg){
  for(let val of arg){
    console.log(val);
  }
}

jspang(0,1,2,3,4,5,6,7);