// 访问器装饰器 用于装饰get set方法

/**
 * 
 * @param target 对静态方式是类本身，对实例方法是类的原型对象
 * @param propertyName 方法名称
 * @param descriptor method的描述符，其中value属性是被装饰的方法
 */

// 温度范围装饰器
function RangeDecorator(max: number,min: number) { // 限制温度的范围
    
    return function(target: any, propertyName: string, descriptor: PropertyDescriptor){
        const oldSet = descriptor.set; // 拿到被装饰的方法
        descriptor.set = function(value: number) {
            if(value > max || value < min) {
                throw new RangeError(`${value}不在${min}-${max}范围内`);
            }
            if(oldSet) { // 如果存在，就执行
                oldSet.call(this, value);
            }
        }
    }
}


class Weather {
    
    private _temperature: number;
    constructor(temperature: number) {
        this._temperature = temperature;
    }
    get temperature() {
        return this._temperature;
    }
    @RangeDecorator(50,-50)
    set temperature(value: number) {
        this._temperature = value;
    }
}

let w = new Weather(100); // 使用构造器赋值时不会触发判断
console.log(w.temperature);
w.temperature = 20; // 20 在10-30范围内
console.log(w.temperature);
w.temperature = -400; // 40不在10-30范围内，抛出错误