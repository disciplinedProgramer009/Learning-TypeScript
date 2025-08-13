// named function
function add(num1 : number, num2 : number, num3? : number) : number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// here num3 is optional parameter
console.log(add(2, 3));

// arrow function
const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;
// here num3 is required parameter so either we pass value to it or it has a default value for itself
console.log(sub(2, 3));

// function expression
const mul = function(num1: number, num2: number, ...numbers : number[]): number {
    return num1 * num2 * numbers.reduce((acc, curr) => acc * curr, 1);
};

let numbers = [4, 5, 6];
// we can pass like this
console.log(mul(2, 3, ...numbers));
// or like this
console.log(mul(2, 3, 4, 5, 6));
// or like this
console.log(mul(2, 3, ...[4, 5, 6]));

// Generic functions

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatNumbers = getItems<number>([1, 2, 3, 4, 5]);

console.log(concatNumbers);

let concatStrings = getItems(['a', 'b', 'c']);

console.log(concatStrings);