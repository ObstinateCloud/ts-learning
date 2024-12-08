// 接口
interface DataInterface {
  type: string
  speed: number
  sort?: string // 可选属性
  readonly price: number // 只读属性
  charge(n: number): void
}

// implements 实现
class Car implements DataInterface {
  type: string
  speed: number
  price: number = 100
  constructor(type: string, speed: number) {
    this.type = type
    this.speed = speed
  }
  charge(n: number) {
    this.speed += n
    console.log(`当前速度：${this.speed},价格：${this.price}`)
  }
}

const car = new Car('car', 100)
car.charge(50)

// 直接实例化
const data: DataInterface = {
  type: 'car',
  speed: 100,
  price: 200,
  charge(n: number) {
    this.speed += n
    console.log(`当前速度：${this.speed},价格：${this.price}`)
  }
}
data.charge(80)

// 接口继承
interface DataInterface2 extends DataInterface {
  color: string
  printObject(): void
}

class Car2 implements DataInterface2 {
  type: string
  speed: number
  price: number = 200
  color: string
  constructor(type: string, speed: number, color: string) {
    this.type = type
    this.speed = speed
    this.color = color
  }
  charge(n: number) {
    this.speed += n
    console.log(`当前速度：${this.speed},价格：${this.price}`)
  }

  printObject(): void {
    console.log(`当前速度：${this.speed},价格：${this.price},颜色：${this.color}`)
  }
}

const car2 = new Car2('car', 100, 'red')
car2.printObject()

// 两个接口名称相同属性不同的接口类型合并
interface DataInterface1 {
  brand: string
}

interface DataInterface1 {
  type: string
  print(): void
}
// 需要同事满足两个接口定义
let data1: DataInterface1 = {
  brand: 'USB3',
  type: '传输',
  print() {
    console.log(`品牌：${this.brand},类型：${this.type}`)
  }
}

data1.print()

// 接口和type的区别
// interface 可以继承和合并，type不可以继承
// type可以合并 交叉类型 联合类型

type DataType = {
  type: string
  speed: number
  charge(n: number): void
}

const data2: DataType = {
  type: 'car',
  speed: 100,
  charge(n: number) {
    this.speed += n
    console.log(`当前速度：${this.speed}`)
  }
}

data2.charge(50)

// interface 和 abstract class 的区别
// interface 只能定义类型，不能实现，abstract class 可以实现，可以继承，可以定义抽象方法，可以定义非抽象方法 类可以实现多个方法
// abstract class 可以被继承，interface 不能被继承，继承只能单继承
