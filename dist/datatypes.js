"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let text = "Hello, TypeScript!";
// text = 10  gives error as text is already assigned with a string. this is called type safety
/******************************* String Datatype *******************************/
/* declare a string variable */
let greeting;
greeting = "Hello, TypeScript!";
let newGreeting = greeting.toUpperCase();
console.log(newGreeting);
/***************************** Number Datatype *********************************/
let age;
age = 25;
//age = "25" gives error as age is already assigned with a number. this is called type safety as we saw in string case
age = 25.5;
let newNum = "25";
let newAge = parseInt(newNum);
console.log(newAge); // 25
console.log(typeof (newAge)); // number
/**************************** Boolean Datatype *********************************/
let isValid;
// console.log(isValid);  // undefined
isValid = true;
/***************************** Array Datatype **********************************/
let arr; // array of string
let strList; // this is also array of string
strList = ["Hello", "TypeScript"];
let numList; // array of number or we can use Array<number>
numList = [1, 2, 3, 4, 5];
let res = numList.filter((num) => {
    return num > 2;
});
let findResult = strList.find((str) => {
    return str === "TypeScript";
});
let arrSum = numList.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(arrSum); // 15
console.log(res); // [3, 4, 5]
console.log(findResult); // TypeScript
let myColor;
/***************************** tuples Datatype **********************************/
let myTuple;
function swapNumbers(firstNumber, secondNumber) {
    return [secondNumber, firstNumber];
}
let result = swapNumbers(5, 10);
console.log(result[0], " ", result[1]);
//result[2] will give error at compile time while array gives array out of bounds error at runtime.
/***************************** Any Datatype **********************************/
// declare a variable of any type
let department; // or let department;
department = "Developer";
department = 10;
console.log(department); // (10  works same as var in js)
//# sourceMappingURL=datatypes.js.map