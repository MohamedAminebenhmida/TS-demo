"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    constructor(id, name, adress) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.adress = adress;
    }
    getEmpId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    setEmpId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getNameWithAdress() {
        return `${this.name}  ${this.adress}`;
    }
    static getEmployeeCount() {
        return 50;
    }
}
_Employee_id = new WeakMap();
/*let john=new Employee();
john.id=1;
john.name="john";
john.adress="102av56n";
console.log(john);*/
let adam = new Employee(2, "adam", "546av25g");
console.log(adam);
console.log(adam.getNameWithAdress());
console.log(adam.getEmpId());
adam.setEmpId(12);
console.log(adam.getEmpId());
class Manager extends Employee {
    constructor(id, name, adress) {
        super(id, name, adress);
    }
}
let mike = new Manager(3, "Mike", "254av65bv");
console.log(mike.getNameWithAdress());
console.log(Employee.getEmployeeCount());
