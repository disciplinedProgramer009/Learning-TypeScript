interface User{
    name: string;
    age: number;
    email: string;
}

let User1: User = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

interface Login{
    loginUser() : User;
}

console.log(User1);