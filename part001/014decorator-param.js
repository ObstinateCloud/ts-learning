"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 参数装饰器 用于装饰方法的参数
/**
 *
 * @param target 对静态方式是类本身，对实例方法是类的原型对象
 * @param methodName
 * @param paramIndex
 */
function ParamDecorator(target, methodName, paramIndex) {
    console.log("Decorator: Log");
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
    if (target.constructor.name === "Bus") {
        console.log("Bus");
    }
    else {
        console.log("Car");
    }
}
class Bus {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    getName(name) {
        return name;
    }
    static getPrice(price) {
        return price;
    }
}
__decorate([
    __param(0, ParamDecorator)
], Bus.prototype, "getName", null);
__decorate([
    __param(0, ParamDecorator)
], Bus, "getPrice", null);
let bus = new Bus("Bus", 10000);
bus.getName("11");
