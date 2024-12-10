// 对象类型申明 开发中
// object 类型 // 不能存储原始类型 number string boolean  //开发中一般不用
let myObj: object = {
    name: 'Tom'
}

// Object类型 // 可以调用到Object原型上的方法的类型 不能存null 和 undefined //开发中一般不用
let myObj1: Object = function(){
    console.log('hello');
}

// 对象类型的声明 分隔符可以是 , ; 空格
console.log('-------对象类型申明-------objectdeclare.ts')

let obj1:{
    name:string,
    age:number,
    gender?:boolean // 可选属性
    [propName:string]:any // 索引签名 任意可追加属性
}

obj1= {
    name:'zhangsan',
    age:18,
    gender:true,
    hobby:'game'
}
console.log(obj1)


// 函数类型申明
let myFunc: (a:string,b:number) => string

// myFunc= function(a:string,b?:number):string{
//     return a+b
// }

// 简写 省略参数类型 返回值类型
// myFunc= function(a,b?){
//      return a+b
// }

// 简写 省略function 关键字 此处的箭头函数和上面申明不一样
myFunc= (a,b?)=>{
    return a+b
}

console.log(myFunc('hello',18))

// 申明数组类型
let arr1:Array<number> = [1,2,3]
console.log(arr1)

let arr2:number[] = [1,2,3]
console.log(arr2)


// 申明元组类型 tuple不是关键字 而是类型 特殊的数组类型
let arr3:[string,number] = ['hello',18]
console.log(arr3)

// 元组类型可以存储不同类型的数据
let arr4:[string,boolean,number?] = ['hello',true,18]
console.log(arr4)

// 元组类型可以存储相同类型的数据
let arr5:[string,...string[]] = ['hello','world']
console.log(arr5)

// 元组类型可以存储相同类型的数据
 
// 枚举类型