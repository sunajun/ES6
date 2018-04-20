//类的声明
class Coder {
  name(val){
    console.log(val)
    return val
  }
  //多方法的声明，这里没有逗号
  skill(val){
    console.log(this.name('jspang')+'-'+'Skill:'+val)
  }
}

//类的使用
let jspang = new Coder
jspang.name('jspang')
jspang.skill('web')

//类的传参
class Coder1 {
  name(val){
    console.log(val)
    return val
  }
  //多方法的声明，这里没有逗号
  skill(val){
    console.log(this.name('jspang')+'-'+'Skill:'+val)
  }

  constructor(a,b){
    this.a = a
    this.b = b
  }

  add(){
    return this.a + this.b
  }
}

let coder = new Coder1(1,2)
console.log(coder.add())

//类的继承
class htmler extends Coder1{

}

let html = new htmler;
html.name('webpack')