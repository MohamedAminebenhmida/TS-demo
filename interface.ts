interface User{
    name:string;
    age?:number;
    id:number;
    email:string;
}
let user:User={name:"john",id:2,email:""};
interface Employees extends User {
    salary:number;
}
let employee:Employees={name:"james",id:54,email:"",salary:25487};
let [user1,user2,...restusers]:User[]=[{name:"paoulo",id:1,email:""},{name:"paoula",id:2,email:""},
{name:"Helen",id:3,email:""},
{name:"Marco",id:4,email:""}];
/*console.log(user2);*/
let usersup=restusers.filter((user)=>user.id>3);
console.log(usersup);
class component { 
    constructor(public name:string){
        
    }
}