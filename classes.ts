class Employee{
    #id! :number;
   private name!:string;
    adress!:string;
    constructor(id:number,name:string,adress:string){
        this.#id=id;
        this.name=name;
        this.adress=adress;
}  
getEmpId():number{
return this.#id;
} 
setEmpId(id:number){
    this.#id=id;
}
getNameWithAdress():string{
    return `${this.name}  ${this.adress}`;
}
static getEmployeeCount():number{
    return 50;
}
}
/*let john=new Employee();
john.id=1;
john.name="john";
john.adress="102av56n";
console.log(john);*/
let adam=new Employee(2,"adam","546av25g");
console.log(adam);
console.log(adam.getNameWithAdress());
console.log(adam.getEmpId());
adam.setEmpId(12);
console.log(adam.getEmpId());
class Manager extends Employee{
    constructor(id:number,name:string,adress:string){
        super(id,name,adress);
    }
}
let mike =new Manager(3,"Mike","254av65bv");
console.log(mike.getNameWithAdress());
console.log(Employee.getEmployeeCount());