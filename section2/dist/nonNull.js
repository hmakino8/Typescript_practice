"use strict";
const getMemberName = (string) => {
    console.log(string.name);
};
getMemberName({ name: 'hmakino' });
//例２
let memberName;
const addName = (val) => {
    memberName = val;
};
addName('hmakino');
console.log(memberName);
//# sourceMappingURL=nonNull.js.map