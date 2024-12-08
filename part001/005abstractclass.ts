// 抽象类
abstract class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  // 抽象方法
  abstract sayHi(): void

  // 普通方法
  run() {
    console.log(`${this.name}, run`)
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  sayHi() {
    console.log(`我是${this.name}，喵喵喵~`)
  }
}

let cat = new Cat('小花')
cat.sayHi()
cat.run()