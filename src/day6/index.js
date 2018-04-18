//二进制的英文单词是Binary,二进制的开始是0（零），然后第二个位置是b（注意这里大小写都可以实现），然后跟上二进制的值就可以了。
let binary = 0B010101;
console.log(binary)

//八进制的英文单词是Octal，也是以0（零）开始的，然后第二个位置是O（欧），然后跟上八进制的值就可以了
let b = 0o666;
console.log(b);

//数字判断和转换
let a = 11/4
console.log(Number.isFinite(a));
console.log(Number.isFinite('japang'))
console.log(Number.isFinite(NaN))
console.log(Number.isFinite(undefined))

//NaN验证
console.log(Number.isNaN(NaN))
//判断是否是整数
let c = 123.5
console.log(Number.isInteger(c))

//整数转换和浮点型转换
let d='9.18'
console.log(Number.parseInt(d))
console.log(Number.parseFloat(d))

//最大安全整数
console.log(Number.MAX_SAFE_INTEGER)
//最小安全整数
console.log(Number.MIN_SAFE_INTEGER)
//安全整数判断
let e = Math.pow(2,53)-1;
console.log(Number.isSafeInteger(e))