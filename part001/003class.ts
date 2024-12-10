console.log('----------类---------003class.ts');
// 类
class People {
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

// 简写构造函数
class People2 {
  constructor(public name: string, public age: number) {}
  sayHello() {
    console.log(`大家好，我是${this.name}，今年${this.age}岁`)
  }
}

const p = new People('小明', 18)
p.sayHello()

// 继承
class Chinese extends People {
  city: string
  constructor(name: string, age: number, city: string) {
    super(name, age)
    this.city = city
  }
  override sayHello() { // 重写父类的方法
    console.log(`大家好，我是${this.name}，今年${this.age}岁，来自${this.city}`)
  }

  run() {
    console.log(`${this.name}在跑`)
  }
}

const chinese = new Chinese('小明', 18, '北京')
chinese.sayHello()
chinese.run()

// 静态属性
class StaticPeople {
  static country: string = '中国'
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  sayHello() {
    console.log(`大家好，我是${this.name}，今年${this.age},我来自${StaticPeople.country}`)
  }
}
StaticPeople.country = '美国'
const sp = new StaticPeople('小明', 18)
sp.sayHello()
