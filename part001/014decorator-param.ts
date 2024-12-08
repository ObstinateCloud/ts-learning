// 参数装饰器 用于装饰方法的参数
/**
 * 
 * @param target 对静态方式是类本身，对实例方法是类的原型对象
 * @param methodName 
 * @param paramIndex 
 */
function ParamDecorator(target: any, methodName: string, paramIndex: number) {
    console.log("Decorator: Log");
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
    if (target.constructor.name === "Bus") {
        console.log("Bus");
    }else {
        console.log("Car");
    }
}

class Bus {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    
    public getName(@ParamDecorator name: string): string {
        return name;
    }

    public static getPrice(@ParamDecorator price: number): number {
        return price;
    }
}

let bus = new Bus("Bus", 10000);
bus.getName("11");