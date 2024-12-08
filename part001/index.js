"use strict";
// 申明函数类型-------
// 方式1
let myAdd = function (x, y) { return x + y; };
// 方式2
let myAdd2;
myAdd2 = function (x, y) { return x + y; };
// 申明数组类型----
let list = [1, 2, 3];
let list2 = ['a', 'b'];
// 声明元组 tuple 固定字段类型和数量的特殊数组
let tuple1 = ['a', 1];
let tuple2 = ['a', 1];
let tuple3 = ['a', 1, 'd', 'e', 'f'];
// 申明枚举 enum------
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
// 数字枚举 默认从0开始
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green;
console.log(c2);
// 字符串枚举
var Color3;
(function (Color3) {
    Color3["Red"] = "red";
    Color3["Green"] = "green";
    Color3["Blue"] = "blue";
})(Color3 || (Color3 = {}));
let c3 = Color3.Green;
console.log(c3);
// 异构枚举
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 1] = "Red";
    Color4["Green"] = "green";
    Color4["Blue"] = "blue";
})(Color4 || (Color4 = {}));
let c4 = Color4.Green;
console.log(c4);
let c5 = 1 /* Color5.Green */;
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
let myName = 'Tom';
let myName2 = () => 'Tom';
let myName3 = 'Tom';
let area = {
    name: 'beijing', // 这里会对相同的属性进行合并
    code: 100000,
    level: 1
};
console.log(area);
console.log(getName(myName3));
console.log(getName(myName2));
console.log(getName(myName));
function printLabel(labelledObj) { }
// 特殊的void 类型
// 直接定义返回值为void的方法时不允许返回值 或者只允许返回undefined
function voidType() {
    // return 666 error
    return undefined; // 正常
}
;
let myFunc1 = function () {
    console.log('warning');
    return 666;
};
let aa = myFunc1();
console.log(aa);
// 但是aa 不允许再被使用了
// if (aa) { // error
// }
