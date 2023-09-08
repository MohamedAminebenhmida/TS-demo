"use strict";
function add(a, b) {
    return a + b;
}
/*console.log(add(25,64));*/
const sub = (num1, num2) => num1 - num2;
/*console.log(sub(25,13));*/
const mul = function (num1, num2, num3) {
    return num3 ? num1 * num2 * num3 : num1 * num2;
};
/*console.log(mul(2,3,4));
console.log(mul(2,3));*/
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add2(2, 4, ...[5, 7, 9, 7]));
