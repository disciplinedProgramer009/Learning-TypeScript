
interface Name{
        firstName: string;
        lastName: string;
    }

class Employee implements Login{

    #id : number;  // private varaible
    protected name : Name;  // visible only in child classes but not in instances of either child or parent class
    age : number;  // by default all the members are public

    // constructor (we cannot have no parameterized and parameterized constructor at the same time in TypeScript)
    constructor(id : number, name : Name, age : number){
        this.#id = id;
        this.name = name;
        this.age = age;
    }
    loginUser(): User {
        return {
            name: `${this.name.firstName} ${this.name.lastName}`,
            age: this.age,
            email: `${this.name.firstName}.${this.name.lastName}@example.com`
        };
    }

     // Getter and Setter for id
    public getId(): number {
        return this.#id;
    }
    public setId(id: number): void {
        this.#id = id;
    }

    // Getter and Setter for name
    public getName(): Name {
        return this.name;
    }
    public setName(name: Name): void {
        this.name = name;
    }

    // Getter and Setter for age
    public getAge(): number {
        return this.age;
    }
    public setAge(age: number): void {
        this.age = age;
    }

    static getEmployeeCount(): number {
        return 20;
    }  // can be called without creating an instance

    // method to get employee address with name
    getNameWithAge(): string {
        // `` is called string literal and is the efficient way to use a string instead of concatenating strings.
        return `${this.name.firstName} is ${this.age} years old.`;
    }
}

class Manager extends Employee {

    constructor(id : number, name : Name, age : number){
        super(id, name, age);  // calling parent class constructor
    }

    // Getter and Setter for name (protected in Employee)
    public getManagerName(): Name {
        return this.getName();
    }
    public setManagerName(name: Name): void {
        this.setName(name);
    }

    // Getter and Setter for age
    public getManagerAge(): number {
        return this.getAge();
    }
    public setManagerAge(age: number): void {
        this.setAge(age);
    }
}

// instance of Employee
let emp1 = new Employee(1, { firstName: 'John', lastName: 'Doe' }, 30);
console.log(emp1);
console.log(emp1.getNameWithAge());
console.log(Employee.getEmployeeCount());  // calling static method without creating instance

console.log();

let manager1 = new Manager(2, { firstName: 'Jane', lastName: 'Smith' }, 40);
console.log(manager1);
console.log(manager1.getNameWithAge());
