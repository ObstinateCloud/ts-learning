// ts中引入别人的js文件 需在tsconfig.json中配置allowJs:true 才能识别

import {add,sub} from './008third.js' // 报错无法找到模块“./008third.js”的声明文件。“c:/zjywork/wslearnspace/ts-learning/part001/008third.js”隐式拥有 "any" 类型

console.log(add(1,2));
console.log(sub(5,2));