interface Name {
    firstName: string;
    lastName: string;
}
declare class Employee implements Login {
    #private;
    protected name: Name;
    age: number;
    constructor(id: number, name: Name, age: number);
    loginUser(): User;
    getId(): number;
    setId(id: number): void;
    getName(): Name;
    setName(name: Name): void;
    getAge(): number;
    setAge(age: number): void;
    static getEmployeeCount(): number;
    getNameWithAge(): string;
}
declare class Manager extends Employee {
    constructor(id: number, name: Name, age: number);
    getManagerName(): Name;
    setManagerName(name: Name): void;
    getManagerAge(): number;
    setManagerAge(age: number): void;
}
declare let emp1: Employee;
declare let manager1: Manager;
//# sourceMappingURL=Class.d.ts.map