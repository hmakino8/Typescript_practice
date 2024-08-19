"use strict";
var First;
(function (First) {
    function testFunc() { console.log('First'); }
    First.testFunc = testFunc;
})(First || (First = {}));
var Second;
(function (Second) {
    function testFunc() { console.log('Second'); }
    Second.testFunc = testFunc;
})(Second || (Second = {}));
First.testFunc();
Second.testFunc();
//# sourceMappingURL=namespace.js.map