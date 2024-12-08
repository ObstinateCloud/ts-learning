// 属性装饰器 装饰属性
/**
 * 
 * @param target 
 *  target 对与静态属性是类  对于实例属性来说是类的原型对象
 * @param propertyName 属性名
 */
function PorpDecorator(target: any, propertyName: string) {
  console.log(target, propertyName);
}
// 监听age变化
function AgeDecorator(target: any, propertyName: string) {
    // 以下写法 存在问题 修改defineProperty修改原型上的属性 所有的实例的值也会变化
    // let oldValue = target[propertyName];
    // Object.defineProperty(target, propertyName, { // defineProperty修改原型上的属性
    //   set(newValue) {
    //     oldValue = newValue;
    //     console.log(`监听到属性${propertyName}变化了,新的值为${newValue}`);
    //   },
    //   get() {
    //     return oldValue;
    //   }
    // });
    
    // 修正写法
    // let key = `${propertyName}`; // 不能与已有属性重名,会导致栈溢出
    let key = `__${propertyName}`;
    Object.defineProperty(target, propertyName, { // defineProperty修改原型上的属性
      set(newValue) {
        this[key] = newValue; // 赋值给当前对象的key属性
        console.log(`监听到属性${propertyName}变化了,新的值为${newValue}`);
      },
      get() {
        return this[key];
      },
      enumerable: true, // 允许枚举
      configurable: true // 禁止修改
    });

  }

class MyClass {
  @PorpDecorator
  name: string;
  @AgeDecorator 
  age: number;
  @PorpDecorator
  static addr: string;
  constructor(name:string,age:number) {
    this.name = name;
    this.age = age;
  }
}

let myClass1 = new MyClass('小明',16);
myClass1.age = 18;

let myClass2 = new MyClass('小红',17);
myClass2.age = 19;

console.log('myClass1:'+myClass1.age+',myClass2:'+myClass2.age); // 此时会出现bug  两个对象的年龄都变成19 修改defineProperty修改原型上的属性 所有的实例的值也会变化

// Object.defineProperty用法
