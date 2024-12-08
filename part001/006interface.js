"use strict";
// implements 实现
class Car {
    constructor(type, speed) {
        this.price = 100;
        this.type = type;
        this.speed = speed;
    }
    charge(n) {
        this.speed += n;
        console.log(`当前速度：${this.speed},价格：${this.price}`);
    }
}
const car = new Car('car', 100);
car.charge(50);
// 直接实例化
const data = {
    type: 'car',
    speed: 100,
    price: 200,
    charge(n) {
        this.speed += n;
        console.log(`当前速度：${this.speed},价格：${this.price}`);
    }
};
data.charge(80);
class Car2 {
    constructor(type, speed, color) {
        this.price = 200;
        this.type = type;
        this.speed = speed;
        this.color = color;
    }
    charge(n) {
        this.speed += n;
        console.log(`当前速度：${this.speed},价格：${this.price}`);
    }
    printObject() {
        console.log(`当前速度：${this.speed},价格：${this.price},颜色：${this.color}`);
    }
}
const car2 = new Car2('car', 100, 'red');
car2.printObject();
// 需要同事满足两个接口定义
let data1 = {
    brand: 'USB3',
    type: '传输',
    print() {
        console.log(`品牌：${this.brand},类型：${this.type}`);
    }
};
data1.print();
const data2 = {
    type: 'car',
    speed: 100,
    charge(n) {
        this.speed += n;
        console.log(`当前速度：${this.speed}`);
    }
};
data2.charge(50);
// interface 和 abstract class 的区别
// interface 只能定义类型，不能实现，abstract class 可以实现，可以继承，可以定义抽象方法，可以定义非抽象方法 类可以实现多个方法
// abstract class 可以被继承，interface 不能被继承，继承只能单继承
