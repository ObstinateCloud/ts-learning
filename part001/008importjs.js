"use strict";
// ts中引入别人的js文件 需在tsconfig.json中配置allowJs:true 才能识别
Object.defineProperty(exports, "__esModule", { value: true });
const _008third_js_1 = require("./008third.js"); // 报错无法找到模块“./008third.js”的声明文件。“c:/zjywork/wslearnspace/ts-learning/part001/008third.js”隐式拥有 "any" 类型
console.log((0, _008third_js_1.add)(1, 2));
console.log((0, _008third_js_1.sub)(5, 2));
