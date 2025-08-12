"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let text = "Hello, TypeScript!";
// text = 10  gives error as text is already assigned with a string. this is called type safety
/********************* String Datatype ***********************/
/* declare a string variable */
let greeting;
greeting = "Hello, TypeScript!";
let newGreeting = greeting.toUpperCase();
console.log(newGreeting);
/********************* Number Datatype ***********************/
let age;
age = 25;
//age = "25" gives error as age is already assigned with a number. this is called type safety as we saw in string case
age = 25.5;
let newNum = "25";
let newAge = parseInt(newNum);
console.log(newAge); // 25
console.log(typeof (newAge)); // number
/********************* Boolean Datatype ***********************/
let isValid;
// console.log(isValid);  // undefined
isValid = true;
/********************* Array Datatype ***********************/
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
//# sourceMappingURL=datatypes.js.map