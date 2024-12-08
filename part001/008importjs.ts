// ts中引入别人的js文件 需在tsconfig.json中配置    // "module": "commonjs", 注释掉
// 启动的时候 用live-server插件 否则会报跨域问题

import {add,sub} from './008third.js' // 报错无法找到模块“./008third.js”的声明文件。“c:/zjywork/wslearnspace/ts-learning/part001/008third.js”隐式拥有 "any" 类型

// console.log(add(1,2));
// console.log(sub(5,2));