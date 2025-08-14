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
    // constructor (we cannot have no parameterized and parameterized constructor at the same time in TypeScript)
    constructor(id, name, age) {
        _Employee_id.set(this, void 0); // private varaible
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.age = age;
    }
    loginUser() {
        return {
            name: `${this.name.firstName} ${this.name.lastName}`,
            age: this.age,
            email: `${this.name.firstName}.${this.name.lastName}@example.com`
        };
    }
    // Getter and Setter for id
    getId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    setId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    // Getter and Setter for name
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    // Getter and Setter for age
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    static getEmployeeCount() {
        return 20;
    } // can be called without creating an instance
    // method to get employee address with name
    getNameWithAge() {
        // `` is called string literal and is the efficient way to use a string instead of concatenating strings.
        return `${this.name.firstName} is ${this.age} years old.`;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, age) {
        super(id, name, age); // calling parent class constructor
    }
    // Getter and Setter for name (protected in Employee)
    getManagerName() {
        return this.getName();
    }
    setManagerName(name) {
        this.setName(name);
    }
    // Getter and Setter for age
    getManagerAge() {
        return this.getAge();
    }
    setManagerAge(age) {
        this.setAge(age);
    }
}
// instance of Employee
let emp1 = new Employee(1, { firstName: 'John', lastName: 'Doe' }, 30);
console.log(emp1);
console.log(emp1.getNameWithAge());
console.log(Employee.getEmployeeCount()); // calling static method without creating instance
console.log();
let manager1 = new Manager(2, { firstName: 'Jane', lastName: 'Smith' }, 40);
console.log(manager1);
console.log(manager1.getNameWithAge());
//# sourceMappingURL=Class.js.map