"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰器工厂用于返回一个装饰器
function fruitDecorator(type) {
    return function (target) {
        target.prototype.describe = function () {
            return `类型是：${type},名字是${this.name},重量是${this.weight}`;
        };
    };
}
function orderWeightDecorator(target) {
    target.prototype.orderWeight = function () {
        console.log(`排序后的重量是：${this.weight}`);
    };
}
;
// 装饰器和装饰器工厂一起使用
let Fruit = class Fruit {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    addWeight(weight) {
        this.weight += weight;
    }
};
Fruit = __decorate([
    orderWeightDecorator // 装饰器无法传参
    ,
    fruitDecorator("苹果") // 装饰器工厂可以传参
], Fruit);
let apple = new Fruit("apple", 100);
console.log(apple.describe()); // 描述苹果
apple.orderWeight();
