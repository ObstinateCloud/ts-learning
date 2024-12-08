"use strict";
// 方法装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 *
 * @param target 对静态方式是类本身，对实例方法是类的原型对象
 * @param propertyName 方法名称
 * @param descriptor 方法的描述符，其中value属性是被装饰的方法
 * @returns
 */
function LogMethodDecorator(target, propertyName, descriptor) {
    // 存储原始方法
    const oldValue = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`开始调用了${propertyName}方法`);
        console.log(`参数为${args}`);
        // let result = oldValue.apply(this, args); // apply方法 绑定this 参数直接传入args 单个值使用
        let result = oldValue.call(this, ...args); // call方法 绑定this 参数传入一个数组 多个值适用
        console.log(`${propertyName}方法执行完毕，返回值为${result}`);
        return result;
    };
    return descriptor;
}
class MyMath {
    add(a, b) {
        return a + b;
    }
    //   @LogMethodDecorator
    static subtract(a, b) {
        return a - b;
    }
}
__decorate([
    LogMethodDecorator
], MyMath.prototype, "add", null);
const m = new MyMath();
m.add(1, 2);
