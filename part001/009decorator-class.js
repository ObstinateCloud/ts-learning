"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器 用装饰器需要在 tsconfig.json 中配置 experimentalDecorators: true
let MyClassDecorator = class MyClassDecorator {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`大家好，我是${this.name}，今年${this.age}岁`);
    }
};
MyClassDecorator = __decorate([
    mydecorator
], MyClassDecorator);
// 装饰器的本质是函数
function mydecorator(target) {
    // target 为 MyClassDecorator的原型对象
    target.prototype.sayHello = function () {
        console.log(`装饰后，大家好，我是${this.name}，今年${this.age}岁`);
    };
    // 禁止扩展原型对象 不能再通过接口或者其他方式动态添加属性
    // Object.seal(target.prototype)
}
let myClassDecorator = new MyClassDecorator('zhangsan', 18);
myClassDecorator.sayHello();
// 装饰器有返回值 会替换原有被装饰的类
let MyClassDecorator2 = class MyClassDecorator2 {
    sayHello() {
        console.log(`大家好，我是原始类`);
    }
};
MyClassDecorator2 = __decorate([
    mydecorator2
], MyClassDecorator2);
function mydecorator2(target) {
    // target 为 MyClassDecorator的原型对象
    return class {
        sayHello() {
            console.log(`装饰后，大家好，我是新类`);
        }
    };
}
let myClassDecorator2 = new MyClassDecorator2();
myClassDecorator2.sayHello();
// 构造自定义类型
// 需求fn 是一个可以被new的函数
function log(fn) {
}
function log2(fn) { }
const Test = () => { };
log(Test);
//log2(Test) // 此处类型不符合需求
class Test2 {
}
log(Test2);
log2(Test2);
function log3(fn) { }
class Test3 {
}
Test3.wife = 'test';
log3(Test3);
// 替换被装饰的类 给被装饰的类添加新的属性
//记录对象创建的时间
function logTime(target) {
    // 返回一个类和 target 具有相同的属性
    return class extends target {
        constructor(...args) {
            super(...args); // 继承target所有属性
            this.createdAt = new Date();
        }
        // 追加获取时间方法
        getTime() {
            return this.createdAt.getTime();
        }
    };
}
let User = class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`大家好，我是${this.name}，今年${this.age}岁`);
    }
};
User = __decorate([
    logTime
], User);
let user = new User('zhangsan', 18);
console.log(user.getTime());
