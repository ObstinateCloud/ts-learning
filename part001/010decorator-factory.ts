// 装饰器工厂 解决装饰器无法传参的问题
interface Fruit {
  describe(): string;
  orderWeight(): void;
}

// 装饰器工厂用于返回一个装饰器
function fruitDecorator(type: string) {
  return function (target: Function) {
    target.prototype.describe = function () {
      return `类型是：${type},名字是${this.name},重量是${this.weight}`;
    };
  };
}


function orderWeightDecorator(target: Function) {
    target.prototype.orderWeight = function () {
        console.log(`排序后的重量是：${this.weight}`);
    };
};

// 装饰器和装饰器工厂一起使用
@orderWeightDecorator // 装饰器无法传参
@fruitDecorator("苹果") // 装饰器工厂可以传参
class Fruit {
  name: string;
  weight: number;
  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }
  addWeight(weight: number) {
    this.weight += weight;
  }
}



let apple = new Fruit("apple", 100);
console.log(apple.describe()); // 描述苹果
apple.orderWeight();

