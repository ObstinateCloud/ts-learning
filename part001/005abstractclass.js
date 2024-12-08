"use strict";
// 抽象类
class Animal {
    constructor(name) {
        this.name = name;
    }
    // 普通方法
    run() {
        console.log(`${this.name}, run`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    sayHi() {
        console.log(`我是${this.name}，喵喵喵~`);
    }
}
let cat = new Cat('小花');
cat.sayHi();
cat.run();
