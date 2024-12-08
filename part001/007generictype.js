"use strict";
// 泛型 在实现时才指定具体类型
function printLog(msg) {
    console.log(msg);
}
printLog('ts');
printLog('ts-simple-generic');
// 指定多个泛型参数
function printLog2(msg, msg2) {
    console.log(msg, msg2);
}
printLog2('ts', 123);
printLog2('ts', 'ts'); // 两次可以使用不同的类型
function printLog3(msg) {
    console.log(msg.length);
}
printLog3('ts');
printLog3([1, 2, 3]);
// printLog3(123) // 报错
// 泛型返回值类型
function createArray(length, value) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}
let result = createArray(3, 'x');
console.log(result);
