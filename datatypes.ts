let iname:string;
iname="hello";
let newname=iname.toUpperCase();
/*console.log(newname);*/
let age:number;
age=20;
let dbb="25";
let result=parseInt(dbb);
let invalid:boolean=false;
/*console.log(invalid);*/
let emplist:Array<string>;
emplist=["1","2","3"];
let numlist:number[];
numlist=[1,2,3,4,5,6];
let res1=numlist.filter((num)=>num>2);
let res2=numlist.find((num)=>num===2);
let res3=numlist.reduce((sum,num)=>sum+num);
/*console.log(res1);
console.log(res2);
console.log(res3);*/
const enum color{
    red,
    blue,
    black
}
let c:color=color.black;
 function sum(number1:any,number2:any):any{
    return number1+number2
}
console.log(sum(2,2));