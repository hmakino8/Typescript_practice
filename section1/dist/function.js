function funcTest(str, int) {
    console.log(`string is ${str} number is ${int}`);
}
funcTest('aaa', 123);
const arrowFuncTest = (str, int) => {
    console.log(`string is ${str} number is ${int}`);
};
arrowFuncTest('bbb', 456);
// 引数　？
const funcTestQ = (str, int) => {
    console.log(str, int);
};
funcTestQ('aaa', 123);
funcTestQ('aaa');
// デフォルトパラメータ
const funcTestD = (int, str = 'aaa') => {
    console.log(str, int);
};
funcTestD(123);
//　可変長パラメータ
const eachNumber = (...items) => {
    for (const item of items) {
        console.log(item);
    }
};
eachNumber(1, 2, 3, 4);
//# sourceMappingURL=function.js.map