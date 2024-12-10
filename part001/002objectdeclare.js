"use strict";
// 对象类型申明 开发中
// 对象类型的声明 分隔符可以是 , ; 空格
console.log('-------对象类型申明-------objectdeclare.ts');
let obj1;
obj1 = {
    name: 'zhangsan',
    age: 18,
    gender: true,
    hobby: 'game'
};
console.log(obj1);
// 函数类型申明
let myFunc;
// myFunc= function(a:string,b?:number):string{
//     return a+b
// }
// 简写 省略参数类型 返回值类型
// myFunc= function(a,b?){
//      return a+b
// }
// 简写 省略function 关键字 此处的箭头函数和上面申明不一样
myFunc = (a, b) => {
    return a + b;
};
console.log(myFunc('hello', 18));
