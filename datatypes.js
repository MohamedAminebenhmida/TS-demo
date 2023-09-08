"use strict";
let iname;
iname = "hello";
let newname = iname.toUpperCase();
/*console.log(newname);*/
let age;
age = 20;
let dbb = "25";
let result = parseInt(dbb);
let invalid = false;
/*console.log(invalid);*/
let emplist;
emplist = ["1", "2", "3"];
let numlist;
numlist = [1, 2, 3, 4, 5, 6];
let res1 = numlist.filter((num) => num > 2);
let res2 = numlist.find((num) => num === 2);
let res3 = numlist.reduce((sum, num) => sum + num);
let c = 2 /* color.black */;
function sum(number1, number2) {
    return number1 + number2;
}
console.log(sum(2, 2));
