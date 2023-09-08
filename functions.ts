function add(a:number,b:number):number{
    return a+b;
}
/*console.log(add(25,64));*/
const sub=(num1:number,num2:number):number=>num1-num2;
/*console.log(sub(25,13));*/
const mul=function(num1:number,num2:number,num3?:number){
    return num3? num1*num2*num3:num1*num2;
}
/*console.log(mul(2,3,4));
console.log(mul(2,3));*/
function add2(num1:number,num2:number,...num3:number[]):number{
    return num1+num2+num3.reduce((a,b)=>a+b,0);
}
console.log(add2(2,4,...[5,7,9,7]));