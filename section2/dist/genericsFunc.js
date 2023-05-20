"use strict";
// 一般的な関数
const funcTest = (int) => {
    return int;
};
console.log(funcTest(123));
//ジェネリクスを関数で使う
const genFunc1 = (arg) => {
    return arg;
};
console.log(genFunc1(123));
console.log(genFunc1('123'));
//# sourceMappingURL=genericsFunc.js.map