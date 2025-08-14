interface User {
    name: string;
    age: number;
    email: string;
}

let User1: User = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

interface Login {
    loginUser(): User;
}

console.log(User1);

// object destructuring
let { name: userName, email: userMail } = User1;
console.log(userName);
console.log(userMail);

// Array destructuring
let [firstUser, secondUser, ...restUsers]: User[] = [
    { name: "John Doe", age: 30, email: "john.doe@example.com" }, 
    { name: "Jane Smith", age: 25, email: "jane.smith@example.com" }, 
    { name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" }, 
    { name: "Bob Brown", age: 35, email: "bob.brown@example.com" }
];

console.log(firstUser);
console.log(secondUser);
console.log(restUsers);