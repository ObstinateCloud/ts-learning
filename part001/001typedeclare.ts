// 类型申明
console.log('----------类型申明---------001typedeclare.ts');
// 全局申明

let myNameEveryArea: string = 'Tom';
// 局部申明
let myNameArea: string = 'Tom';

let myAge: number = 25;
let myIsAlive: boolean = true;
let myFriends: string[] = ['Tom', 'Jerry'];

console.log(myNameEveryArea,myNameArea,myAge,myIsAlive,myFriends);

// 方法参数类型和返回值申明
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1,2));

// 字面量类型
let myNameArea1: 'Tom' | 'Jerry' = 'Tom';

// js 中的数据类型
/*
 *  undefined
    null
    boolean
    bigint
    number
    string
    symbol
    object
    object 包含哪些类型？ function, array, object，date, error, regexp, map, set, weakmap, weakset

    function
    class
    interface
    enum
    type
    namespace
    module


*/
// tsz 中的数据类型
/*
 *  
    // 支持所有 js 数据类型
    any
    unknown
    void
    never
    enum
    tuple
    
    // 用于定义自定义类型
    interface
    type

*/

// any 类型 可以接受任何类型 赋值后类型会变成赋值时的类型 注意 any 类型会丢失类型信息,可以赋值给任何类型的变量
let myNameArea2: any = 'Tom';
myNameArea2 = 25;
myNameArea2 = true;
myNameArea2 = ['Tom', 'Jerry'];
let myNameArea4: string = 'Tom';
myNameArea4 = myNameArea2; //可以赋值给任何类型的变量 myNameArea4类型校验失效

console.log(myNameArea2);

// unknown 类型 类型安全的any
let myNameArea3: unknown = 'Tom';
myNameArea3 = 25;
console.log(typeof myNameArea3);
myNameArea3 = true;
console.log(typeof myNameArea3);
myNameArea3 = ['Tom','Jerry'];
console.log(typeof myNameArea3);
myNameArea3 = 'Are you ok';
let myNameArea5: string
// myNameArea5 = myNameArea3; // unknown 类型不能直接赋值给其他类型
if (typeof myNameArea3 === 'string') { 
    myNameArea5 = myNameArea3 // 类型保护 方式1 经过类型判断后可以
    console.log(myNameArea5.length);
}

// 断言 as
myNameArea5 = myNameArea3 as string; // 方式2 断言处理后可以进行赋值
myNameArea5 = <string>myNameArea3; // 方式2 断言处理后可以进行赋值 断言的另一种写法

// any和unknown的区别
let myNameArea6: any = 'Tom';
myNameArea6 = 25;
console.log(myNameArea6.length); // any 类型可以进行任意操作
console.log(myNameArea6.qqbx); // any 类型可以进行任意操作

let myNameArea7: unknown = 'Tom';
myNameArea7 = 25;
// console.log(myNameArea7.length); // unknown 类型不能进行任意操作
(myNameArea7 as string).toLocaleLowerCase // 断言处理后可以进行操作

// never类型 表示不能返回任何值的函数 如果不写默认 会返回undefined
function errorDeal(message: string): never {
    throw new Error(message);
}


// function loopForever(): never {
//     while (true) {
//         console.log('死循环');
//     }
// }

// never类型一般是系统推断出来的
let myNameArea8: string  = 'Tom';
if(typeof myNameArea8 === 'string')  {
    console.log(myNameArea8.length);
}else{
    console.log(myNameArea8); // never类型
} 

// void类型 表示没有任何返回值的函数 undefined是void可以接受赋值
function warnUser(): void {
    console.log('warning');
}
let res = warnUser()
// if(res){} // void类型不能进行判断
// undefined 
function warnUser1(): undefined {
    console.log('warning');
    return undefined;
}

let res1 = warnUser1()
if(res1){} // undefined类型可以进行判断


