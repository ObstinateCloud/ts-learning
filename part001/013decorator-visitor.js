"use strict";
// 访问器装饰器 用于装饰get set方法
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
 * @param descriptor method的描述符，其中value属性是被装饰的方法
 */
// 温度范围装饰器
function RangeDecorator(max, min) {
    return function (target, propertyName, descriptor) {
        const oldSet = descriptor.set; // 拿到被装饰的方法
        descriptor.set = function (value) {
            if (value > max || value < min) {
                throw new RangeError(`${value}不在${min}-${max}范围内`);
            }
            if (oldSet) { // 如果存在，就执行
                oldSet.call(this, value);
            }
        };
    };
}
class Weather {
    constructor(temperature) {
        this._temperature = temperature;
    }
    get temperature() {
        return this._temperature;
    }
    set temperature(value) {
        this._temperature = value;
    }
}
__decorate([
    RangeDecorator(50, -50)
], Weather.prototype, "temperature", null);
let w = new Weather(100); // 使用构造器赋值时不会触发判断
console.log(w.temperature);
w.temperature = 20; // 20 在10-30范围内
console.log(w.temperature);
w.temperature = -400; // 40不在10-30范围内，抛出错误
