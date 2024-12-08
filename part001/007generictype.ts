// 泛型 在实现时才指定具体类型
function printLog<T>(msg: T) { // 此处不写类型会提示错误
    console.log(msg)
}

printLog<string>('ts')
printLog('ts-simple-generic')

// 指定多个泛型参数
function printLog2<T, K>(msg: T, msg2: K) {
    console.log(msg, msg2)
}

printLog2<string, number>('ts', 123)
printLog2('ts', 'ts') // 两次可以使用不同的类型

// 泛型约束
interface IWithLength {
    length: number
}

function printLog3<T extends IWithLength>(msg: T) {
    console.log(msg.length)
}

printLog3('ts')
printLog3([1, 2, 3])
// printLog3(123) // 报错

// 泛型返回值类型
function createArray<T>(length: number, value: T): Array<T> {
    let arr: T[] = []
    for (let i = 0; i < length; i++) {
        arr[i] = value
    }
    return arr
}

let result = createArray(3, 'x')
console.log(result)