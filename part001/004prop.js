"use strict";
// 属性修饰符
// public 默认值，可以在类、子类、实例访问
class A {
    constructor(name) {
        this.name = name;
    }
}
// protected 子类和本类可以访问
class B {
    constructor(name) {
        this.name = name;
    }
}
// private 私有属性，只能在本类访问
class C {
    constructor(name) {
        this.name = name;
    }
}
// readonly 只读属性，初始化后不允许修改
class D {
    constructor(name) {
        this.name = name;
    }
}
let d = new D('d');
console.log(d.name);
// d.name = 'dd' // 报错，readonly 只读属性
// static 静态属性，通过类访问，实例无法访问
class E {
}
// 静态属性，通过类访问，实例无法访问
E.staticName = 'e';
let e = new E();
//console.log(e.staticName) // 报错，实例无法访问静态属性
