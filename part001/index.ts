// 申明函数类型-------
// 方式1
let myAdd: (x: number, y: number) => number =
  function(x: number, y: number): number { return x + y; };

  // 方式2
let myAdd2: (baseValue: number, increment: number) => number

myAdd2= function(x: number, y: number): number { return x + y; };


// 申明数组类型----
let list: number[] = [1, 2, 3];

let list2: Array<string> = ['a', 'b'];


// 声明元组 tuple 固定字段类型和数量的特殊数组
let tuple1: [string, number] = ['a', 1];
let tuple2: [string, number?] = ['a', 1];
let tuple3: [string, number,...string[]] = ['a', 1,'d','e','f'];

// 申明枚举 enum------
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;

console.log(c);
// 数字枚举 默认从0开始
enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4
}

let c2: Color2 = Color2.Green;
console.log(c2);

// 字符串枚举
enum Color3 {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
let c3: Color3 = Color3.Green;
console.log(c3);

// 异构枚举
enum Color4 {
  Red = 1,
  Green = 'green',
  Blue = 'blue'
}

let c4: Color4 = Color4.Green;
console.log(c4);

// 常量枚举 未使用时不会生成js代码
const enum Color5 {
    Red,
    Green,
    Blue
}
let c5 = Color5.Green;

// type alias 类型别名 ------
type Name = string;
type Age =  number;
type Addr = {
    name: string,
    code: number
};

type School = {
  name: string,
  level: number
}
type Area =  Addr & School; // 交叉类型
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver; // 联合类型
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

let myName: Name = 'Tom';
let myName2: NameResolver = () => 'Tom';

let myName3: NameOrResolver = 'Tom';
let area: Area = {
    name: 'beijing', // 这里会对相同的属性进行合并
    code: 100000,
    level: 1
}
console.log(area);

console.log(getName(myName3));
console.log(getName(myName2));
console.log(getName(myName));
// 接口 interface -------
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {}

// 特殊的void 类型
// 直接定义返回值为void的方法时不允许返回值 或者只允许返回undefined
function voidType(): void {
  // return 666 error
  return undefined // 正常
};
// 当方法定义和方法的实例化分开时这个函数可以添加返回值。
type warnUser = () => void; // 返回值为void 正常不允许有返回值 只能返回 undefined
let myFunc1: warnUser = function(){ // 当把warnUser类型实例化后，这个函数可以添加返回值。
  console.log('warning');
  return 666
}
let aa = myFunc1()
console.log(aa);
// 但是aa 不允许再被使用了
// if (aa) { // error
  
// }