// 类装饰器 用装饰器需要在 tsconfig.json 中配置 experimentalDecorators: true
@mydecorator
class MyClassDecorator {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log(`大家好，我是${this.name}，今年${this.age}岁`)
    }

}

// 装饰器的本质是函数
function mydecorator(target: any) {
    // target 为 MyClassDecorator的原型对象
    target.prototype.sayHello = function () {
        console.log(`装饰后，大家好，我是${this.name}，今年${this.age}岁`)
    }
    // 禁止扩展原型对象 不能再通过接口或者其他方式动态添加属性
    // Object.seal(target.prototype)
}

let myClassDecorator = new MyClassDecorator('zhangsan', 18)

myClassDecorator.sayHello()


// 装饰器有返回值 会替换原有被装饰的类
@mydecorator2
class MyClassDecorator2 {
    sayHello() {
        console.log(`大家好，我是原始类`)
    }

}

function mydecorator2(target: any) {
    // target 为 MyClassDecorator的原型对象
    return class {
        sayHello() {
            console.log(`装饰后，大家好，我是新类`)
        }
    }
}

let myClassDecorator2 = new MyClassDecorator2()

myClassDecorator2.sayHello()

// 构造自定义类型

// 需求fn 是一个可以被new的函数
function log(fn: Function) { // Function 包含普通函数、箭头函数、方法等等 箭头函数无法用new 调用
    
}
// 自定义类型 1. 仅申明构造函数
/**
 * 1. new 表示可以被new操作函数调用
 * 2. ...args 表示构造函数的参数,接收任意数量的参数
 * 3. any[] 表示接收任意类型的参数
 * 4. {} 表示返回一个对象 非undefined null
 */
type Constructor = new (...args: any[]) => {};

function log2(fn: Constructor){}

const Test = () => {}

log(Test)
//log2(Test) // 此处类型不符合需求


class Test2 {}
log(Test2)
log2(Test2)

// 自定义类型 构造函数+静态属性
type Constructor2 = {
    new (...args: any[]) :{}; // 构造签名
    wife: string
}
function log3(fn: Constructor2){}

class Test3 {
    static wife = 'test'
}

log3(Test3)

// 替换被装饰的类 给被装饰的类添加新的属性


//记录对象创建的时间
function logTime<T extends Constructor>(target: T) {
    // 返回一个类和 target 具有相同的属性
    return class extends target {
        // 追加属性
        createdAt: Date
        constructor(...args: any[]) {
            super(...args) // 继承target所有属性
            this.createdAt = new Date()
        }
        // 追加获取时间方法
        getTime() {
            return this.createdAt.getTime()
        }
    }
}

@logTime
class User {
    name : string
    age : number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log(`大家好，我是${this.name}，今年${this.age}岁`)
    }
}

let user = new User('zhangsan', 18)

//console.log(user.getTime()) // 获取创建时间方法会报错

// 给user添加getTime方法
interface User {
    getTime(): void
}

console.log(user.getTime())
