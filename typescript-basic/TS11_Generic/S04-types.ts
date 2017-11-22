/*
    ## Generic Types
        - 구현체에 return T를 설정하지 않아도,
            return false 시 오류가 나지 않는다?
*/

type TsHelloGeneric11_4 = <T>(message: T) => T;

const tsHello11_4: TsHelloGeneric11_4 = <T>(message: T): T => {
    return message;
}

console.log(tsHello11_4<string>('Hello').length);